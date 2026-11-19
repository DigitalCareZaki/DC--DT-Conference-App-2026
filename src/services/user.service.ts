import { HttpError } from "../utils/HttpError";
import { ChatRepository, UserRepository } from "../repositories";
import {
    generateOTP,
    generateResetPasswordToken,
    getExpiryDate,
    getMongoId,
    getOtpExpiryMinutes,
    getResetPasswordExpiryMinutes,
    hashPassword,
    isPasswordMatched,
    logger,
    sendOtpEmail
} from "../utils/helpers";
import { Types } from "mongoose";
import { FAVORITE_TYPE, ROLE } from "../utils/constants";
import { getAllUsersQuery, getUserFavoritesAggregation } from "./queries/user.query";

type OtpPurpose = "ACCOUNT_VERIFICATION" | "RESET_PASSWORD";

export class UserService {
    private resolvePurpose(purpose?: string): OtpPurpose {
        return purpose === "RESET_PASSWORD" ? "RESET_PASSWORD" : "ACCOUNT_VERIFICATION";
    }

    private async issueOtp(userId: string | Types.ObjectId, email: string) {
        const otp = generateOTP();
        const otpExpiry = getExpiryDate(getOtpExpiryMinutes());

        await UserRepository.update(
            { _id: userId },
            { otp, otpExpiry },
            { new: true }
        );

        try {
            await sendOtpEmail(email, otp, getOtpExpiryMinutes());
        } catch (error) {
            logger.error('Failed to send OTP email', 'UserService', error);
        }

        return { otp, otpExpiry };
    }

    private async createChatsForUser(userId: string | Types.ObjectId) {
        if (!userId) return;

        const normalizedUserId = userId instanceof Types.ObjectId ? userId.toString() : userId;
        const newUserObjectId = getMongoId(normalizedUserId);
        if (!newUserObjectId) return;

        const existingUsers = await UserRepository.findAll(
            {
                $and: [
                    { _id: { $ne: newUserObjectId } },
                    { isDeleted: false },
                    { role: { $ne: ROLE.ADMIN } }
                ]
            },
        ).select('_id').lean();

        for (const existingUser of existingUsers) {
            const existingUserId = existingUser?._id ? existingUser._id.toString() : undefined;
            if (existingUserId === newUserObjectId.toString()) continue;
            if (!existingUserId) continue;
            const existingUserObjectId = getMongoId(existingUserId);
            if (!existingUserObjectId) continue;

            const sortedParticipantIds = [
                newUserObjectId.toString(),
                existingUserObjectId.toString()
            ].sort();

            const participants = sortedParticipantIds
                .map((id) => getMongoId(id))
                .filter((id): id is Types.ObjectId => Boolean(id));

            const existingChat = await ChatRepository.get({
                $and: [
                    { participants: { $size: participants.length } },
                    { participants: { $all: participants } },
                ],
            });

            if (!existingChat) {
                await ChatRepository.create({ participants });
            }
        }
    }

    async fetchAllUsers(queryParams: any, userId: string) {
        const { page = 1, limit = 10, search = "" } = queryParams;
        const query = getAllUsersQuery(search, userId);

        const pageNum = Number(page);
        const limitNum = Number(limit);

        return await UserRepository.getAll({
            query,
            page: pageNum,
            limit: limitNum,
            populate: ['favorites.favoriteId'],
        });
    }

    async getUserById(id: string) {
        const user = await UserRepository.get({ _id: id, isDeleted: false }).populate('favorites.favoriteId');
        if (!user) throw new HttpError(404, 'User not found');
        return user;
    }

    async registerUser(data: any) {
        const userExists = await UserRepository.get({ email: data.email, isDeleted: false });
        if (userExists) throw new HttpError(409, 'User already exists');

        const user = await UserRepository.create(data);

        const { otpExpiry } = await this.issueOtp(user._id, user.email);

        const freshUser = await this.getUserById(user._id.toString());
        return {
            user: freshUser,
            requiresVerification: true,
            otpExpiresAt: otpExpiry,
        };
    }

    async loginUser(data: any) {
        const { email, password, role } = data;
        const user = await UserRepository.get({ email, role, isDeleted: false }).select('+password');
        if (!user) throw new HttpError(404, 'User not found');

        const isMatched = await isPasswordMatched(password, user.password);
        if (!isMatched) throw new HttpError(401, 'Invalid password');

        if (!user.isVerified) {
            await this.issueOtp(user._id, user.email);
            return { isVerified: false, user };
        }

        await user.populate('favorites.favoriteId');
        (user as any).password = undefined;
        const accessToken = user.generateAccessToken();
        return { user, accessToken };
    }

    async sendOtp(email: string, purpose?: string) {
        if (!email) throw new HttpError(422, 'Email is required');
        const resolvedPurpose = this.resolvePurpose(purpose);
        const user = await UserRepository.get({ email, isDeleted: false });
        if (!user) throw new HttpError(404, 'User not found');

        const { otpExpiry } = await this.issueOtp(user._id, user.email);

        return {
            email: user.email,
            expiresAt: otpExpiry,
        };
    }

    async verifyOtp(email: string, otp: string, purpose?: string) {
        if (!email) throw new HttpError(422, 'Email is required');
        if (!otp) throw new HttpError(422, 'OTP code is required');
        const resolvedPurpose = this.resolvePurpose(purpose);
        const user = await UserRepository.get({ email, isDeleted: false })
            .select('+otp +otpExpiry +resetPasswordToken +resetPasswordExpiry');
        if (!user) throw new HttpError(404, 'User not found');

        if (!user.otp || !user.otpExpiry) {
            throw new HttpError(400, 'OTP not found. Please request a new code.');
        }

        if (user.otp !== otp) {
            throw new HttpError(400, 'Invalid OTP code');
        }

        if (user.otpExpiry.getTime() < Date.now()) {
            throw new HttpError(400, 'OTP has expired. Please request a new code.');
        }

        const updatePayload: Record<string, unknown> = {
            otp: null,
            otpExpiry: null,
            isVerified: true,
        };

        const response: Record<string, unknown> = {
            email: user.email,
            isVerified: true,
        };

        if (resolvedPurpose === "RESET_PASSWORD") {
            let resetPasswordToken: string;
            try {
                resetPasswordToken = generateResetPasswordToken(user._id.toString());
            } catch (error) {
                logger.error('Failed to generate reset password token', 'UserService', error);
                throw new HttpError(500, 'Unable to generate reset password token.');
            }
            const resetPasswordExpiry = getExpiryDate(getResetPasswordExpiryMinutes());

            updatePayload.resetPasswordToken = resetPasswordToken;
            updatePayload.resetPasswordExpiry = resetPasswordExpiry;

            response.resetPasswordToken = resetPasswordToken;
            response.resetPasswordExpiry = resetPasswordExpiry;
        } else {
            updatePayload.resetPasswordToken = "";
            updatePayload.resetPasswordExpiry = null;
        }

        await UserRepository.update({ _id: user._id }, updatePayload, { new: true });

        if (resolvedPurpose === "ACCOUNT_VERIFICATION") {
            try {
                await this.createChatsForUser(user._id);
            } catch (error) {
                logger.error('Failed to create chats for new user', 'UserService', error);
            }
        }

        return { ...response, purpose: resolvedPurpose };
    }

    async resetPassword(email: string, newPassword: string, token: string) {
        if (!email) throw new HttpError(422, 'Email is required');
        if (!newPassword) throw new HttpError(422, 'New password is required');
        if (!token) throw new HttpError(400, 'Reset password token is required');

        const user = await UserRepository.get({ email, isDeleted: false })
            .select('+resetPasswordToken +resetPasswordExpiry');
        if (!user) throw new HttpError(404, 'User not found');

        if (!user.resetPasswordToken || !user.resetPasswordExpiry) {
            throw new HttpError(400, 'Reset password token not generated. Please verify OTP again.');
        }

        if (user.resetPasswordToken !== token) {
            throw new HttpError(400, 'Invalid reset password token');
        }

        if (user.resetPasswordExpiry.getTime() < Date.now()) {
            throw new HttpError(400, 'Reset password token has expired. Please verify OTP again.');
        }

        const hashedPassword = await hashPassword(newPassword);

        await UserRepository.update(
            { _id: user._id },
            {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpiry: null,
                otp: null,
                otpExpiry: null,
                isVerified: true,
            },
            { new: true }
        );

        return { email: user.email };
    }

    async googleLogin(data: any) {
        const { email, role } = data;
        let user = await UserRepository.get({ email, isDeleted: false });

        if (user && user.role !== role) {
            throw new HttpError(409, `User already registered as ${user.role}`);
        }

        if (!user) {
            user = await UserRepository.create({
                email,
                name: email.split('@')[0],
                password: "google-user",
                role,
                isVerified: true,
            });

            try {
                await this.createChatsForUser(user._id);
            } catch (error) {
                logger.error('Failed to create chats for Google user', 'UserService', error);
            }
        } else if (!user.isVerified) {
            const updatedUser = await UserRepository.update({ _id: user._id }, { isVerified: true }, { new: true });
            if (updatedUser) {
                user = updatedUser;
            }
        }

        const accessToken = user.generateAccessToken();
        return { user, accessToken };
    }

    async updateUser(userId: string, data: any) {
        const user = await UserRepository.update({ _id: userId }, data, { new: true });
        if (!user) throw new HttpError(404, 'User not found');
        await user.populate('favorites.favoriteId');
        return user;
    }

    async addOrRemoveFavorites(userId: string, type: 'conference' | 'workshop' | 'exhibition', favoriteId: string) {
        if (!favoriteId) throw new HttpError(422, 'Favorite ID is required');

        const favoriteType = this.normalizeFavoriteType(type);
        if (!favoriteType) {
            throw new HttpError(422, 'Type must be either conference, workshop, or exhibition');
        }

        if (!getMongoId(favoriteId)) {
            throw new HttpError(422, 'Favorite ID must be a valid ObjectId');
        }

        const favoriteObjectId = new Types.ObjectId(favoriteId);

        const removed = await UserRepository.update(
            {
                _id: userId,
                favorites: {
                    $elemMatch: {
                        type: favoriteType,
                        favoriteId: favoriteObjectId,
                    },
                },
            },
            {
                $pull: {
                    favorites: {
                        type: favoriteType,
                        favoriteId: favoriteObjectId,
                    },
                },
            },
            { new: true }
        );
        if (removed) {
            return this.getPopulatedFavorites(userId);
        }

        const added = await UserRepository.update(
            { _id: userId },
            {
                $addToSet: {
                    favorites: {
                        type: favoriteType,
                        favoriteId: favoriteObjectId,
                    },
                },
            },
            { new: true }
        );
        if (!added) throw new HttpError(404, 'User not found');
        return this.getPopulatedFavorites(userId);
    }

    private normalizeFavoriteType(type?: string): FAVORITE_TYPE | undefined {
        if (!type) return undefined;
        const normalized = type.toString().trim().toLowerCase();

        switch (normalized) {
            case 'conference':
                return FAVORITE_TYPE.CONFERENCE;
            case 'workshop':
                return FAVORITE_TYPE.WORKSHOP;
            case 'exhibition':
                return FAVORITE_TYPE.EXHIBITION;
            default:
                throw new HttpError(422, 'Type must be either conference, workshop, or exhibition');
        }
    }

    private aggregateFavorites(userId: string, page: number, limit: number, favoriteType?: FAVORITE_TYPE) {
        const pipeline = getUserFavoritesAggregation(new Types.ObjectId(userId), favoriteType);
        return UserRepository.getAllAggregate({
            query: pipeline,
            page,
            limit,
        });
    }

    async getUserFavorites(userId: string, requestQuery: any) {
        if (!getMongoId(userId)) {
            throw new HttpError(422, 'Invalid user ID');
        }

        const pageNumber = Math.max(parseInt(`${requestQuery?.page ?? 1}`, 10) || 1, 1);
        const limitNumber = Math.max(parseInt(`${requestQuery?.limit ?? 10}`, 10) || 10, 1);
        const favoriteType = this.normalizeFavoriteType(requestQuery?.type);

        const user = await UserRepository.get({ _id: userId, isDeleted: false }, 'favorites').lean();
        if (!user) throw new HttpError(404, 'User not found');

        const { data, pagination } = await this.aggregateFavorites(userId, pageNumber, limitNumber, favoriteType);

        return {
            favorites: data,
            pagination,
        };
    }

    async softDeleteUser(id: string) {
        if (!getMongoId(id)) {
            throw new HttpError(422, 'Invalid userId');
        }
        const user = await UserRepository.update({ _id: id }, { isDeleted: true });
        if (!user) throw new HttpError(404, 'User not found');
        return user;
    }

    private async getPopulatedFavorites(userId: string) {
        if (!getMongoId(userId)) {
            throw new HttpError(422, 'Invalid userId');
        }

        const user = await UserRepository.get({ _id: userId, isDeleted: false }, 'favorites').lean();
        if (!user) throw new HttpError(404, 'User not found');

        const favoritesCount = user.favorites?.length ?? 0;
        if (favoritesCount === 0) {
            return [];
        }

        const { data } = await this.aggregateFavorites(userId, 1, favoritesCount, undefined);
        return data;
    }
}
