import { HttpError } from "../utils/HttpError";
import { ConferenceRepository, UserRepository } from "../repositories";
import { GetPaginationQueryParams } from "../utils/interfaces";
import { getMongoId } from "../utils/helpers";
import { ObjectId, Types } from "mongoose";
import { FAVORITE_TYPE } from "../utils/constants";
import { getAllConferencesQuery } from "./queries/conference.query";

export class ConferenceService {
    private async removeConferenceFromFavorites(conferenceId: string) {
        const favoriteObjectId = new Types.ObjectId(conferenceId);
        await UserRepository.updateMany(
            {
                favorites: {
                    $elemMatch: {
                        type: FAVORITE_TYPE.CONFERENCE,
                        favoriteId: favoriteObjectId,
                    },
                },
            },
            {
                $pull: {
                    favorites: {
                        type: FAVORITE_TYPE.CONFERENCE,
                        favoriteId: favoriteObjectId,
                    },
                },
            }
        );
    }

    private async getUserFavoriteConferenceIds(userId: string): Promise<Types.ObjectId[]> {
        const user = await UserRepository.get({ _id: userId }, "favorites").lean();
        const favoriteConferenceIds = ((user?.favorites ?? [])
            .filter(({ type }) => type === FAVORITE_TYPE.CONFERENCE)
            .map(({ favoriteId }) => {
                if (!favoriteId) return null;
                if (favoriteId instanceof Types.ObjectId) return favoriteId;

                if (typeof favoriteId === "string") {
                    return Types.ObjectId.isValid(favoriteId) ? new Types.ObjectId(favoriteId) : null;
                }

                const populatedId = (favoriteId as any)?._id;
                if (populatedId instanceof Types.ObjectId) return populatedId;
                if (typeof populatedId === "string" && Types.ObjectId.isValid(populatedId)) {
                    return new Types.ObjectId(populatedId);
                }

                return null;
            }))
            .filter((id): id is Types.ObjectId => id !== null);
        return favoriteConferenceIds;
    }

    async getAllConferences(queryParams: GetPaginationQueryParams) {
        const { page = 1, limit = 10, search = "" } = queryParams;
        const newLim = Number(limit);
        const newPage = Number(page);
        // const favoriteConferenceIds = await this.getUserFavoriteConferenceIds(userId);
        // const query = getAllConferencesQuery(search, favoriteConferenceIds);

        // return await ConferenceRepository.getAllAggregate({
        //     query,
        //     page: newPage,
        //     limit: newLim,
        // });
        const query = {
            title: { $regex: search, $options: 'i' },
            description: { $regex: search, $options: 'i' }
        }

        return await ConferenceRepository.getAll({
            query,
            page: newPage,
            limit: newLim,
        });
    }

    async getConferenceById(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid conference ID');
        const conference = await ConferenceRepository.get({ _id: id });
        if (!conference) throw new HttpError(404, 'Conference not found');
        return conference;
    }

    async createConference(data: any) {
        const conference = await ConferenceRepository.create(data);
        return conference;
    }

    async updateConference(id: string, data: any) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid conference ID');
        const conference = await ConferenceRepository.update({ _id: id }, data);
        if (!conference) throw new HttpError(404, 'Conference not found');
        return conference;
    }

    async deleteConference(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid conference ID');
        const conference = await ConferenceRepository.delete({ _id: id });
        if (!conference) throw new HttpError(404, 'Conference not found');
        await this.removeConferenceFromFavorites(id);
        return conference;
    }

    async registerUserToConference(conferenceId: string, userId: string) {
        if (!getMongoId(conferenceId)) throw new HttpError(400, 'Invalid conference ID');
        if (!getMongoId(userId)) throw new HttpError(400, 'Invalid user ID');

        const conference = await ConferenceRepository.get({ _id: conferenceId });
        if (!conference) throw new HttpError(404, 'Conference not found');

        if (conference.registeredUsers.includes(userId)) {
            throw new HttpError(400, 'User already registered to this conference');
        }

        conference.registeredUsers.push(userId);
        const updatedConference = await ConferenceRepository.update({ _id: conferenceId }, { registeredUsers: conference.registeredUsers });
        return updatedConference;
    }

    async unregisterUserFromConference(conferenceId: string, userId: string) {
        if (!getMongoId(conferenceId)) throw new HttpError(400, 'Invalid conference ID');
        if (!getMongoId(userId)) throw new HttpError(400, 'Invalid user ID');

        const conference = await ConferenceRepository.get({ _id: conferenceId });
        if (!conference) throw new HttpError(404, 'Conference not found');

        // Check if user is registered
        if (!conference.registeredUsers.includes(userId)) {
            throw new HttpError(400, 'User is not registered to this conference');
        }

        conference.registeredUsers = conference.registeredUsers.filter((id: (ObjectId | string)) => id.toString() !== userId);
        const updatedConference = await ConferenceRepository.update({ _id: conferenceId }, { registeredUsers: conference.registeredUsers });
        return updatedConference;
    }
}
