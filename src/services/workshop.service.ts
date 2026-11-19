import { HttpError } from "../utils/HttpError";
import { UserRepository, WorkshopRepository } from "../repositories";
import { GetPaginationQueryParams } from "../utils/interfaces";
import { getMongoId } from "../utils/helpers";
import { ObjectId, Types } from "mongoose";
import { getAllWorkshopsQuery } from "./queries/workshop.query";
import { FAVORITE_TYPE } from "../utils/constants";

export class WorkshopService {

    private async removeWorkshopFromFavorites(workshopId: string) {
        const favoriteObjectId = new Types.ObjectId(workshopId);
        await UserRepository.updateMany(
            {
                favorites: {
                    $elemMatch: {
                        type: FAVORITE_TYPE.WORKSHOP,
                        favoriteId: favoriteObjectId,
                    },
                },
            },
            {
                $pull: {
                    favorites: {
                        type: FAVORITE_TYPE.WORKSHOP,
                        favoriteId: favoriteObjectId,
                    },
                },
            }
        );
    }

    private async getUserFavoriteWorkshopIds(userId: string): Promise<Types.ObjectId[]> {
        const user = await UserRepository.get({ _id: userId }, "favorites").lean();
        const favoriteWorkshopIds = ((user?.favorites ?? [])
            .filter(({ type }) => type === FAVORITE_TYPE.WORKSHOP)
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
            })).filter((id): id is Types.ObjectId => id !== null);
        return favoriteWorkshopIds;
    }

    async getAllWorkshops(queryParams: GetPaginationQueryParams) {
        const { page = 1, limit = 10, search = "" } = queryParams;

        const newPage = Number(page);
        const newLimit = Number(limit);

        // const favoriteWorkshopIds = await this.getUserFavoriteWorkshopIds(userId);
        // const query = getAllWorkshopsQuery(search, favoriteWorkshopIds);

        const query = {
            title: { $regex: search, $options: 'i' },
        }

        return await WorkshopRepository.getAll({
            query,
            page: newPage,
            limit: newLimit,
        });
    }

    async getWorkshopById(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid workshop ID');
        const workshop = await WorkshopRepository.get({ _id: id });
        if (!workshop) throw new HttpError(404, 'Workshop not found');
        return workshop;
    }

    async createWorkshop(data: any) {
        const workshop = await WorkshopRepository.create(data);
        return workshop;
    }

    async updateWorkshop(id: string, data: any) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid workshop ID');
        const workshop = await WorkshopRepository.update({ _id: id }, data);
        if (!workshop) throw new HttpError(404, 'Workshop not found');
        return workshop;
    }

    async deleteWorkshop(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid workshop ID');
        const workshop = await WorkshopRepository.delete({ _id: id });
        if (!workshop) throw new HttpError(404, 'Workshop not found');
        await this.removeWorkshopFromFavorites(id);
        return workshop;
    }

    async registerForWorkshop(workshopId: string, userId: string) {
        if (!getMongoId(workshopId)) throw new HttpError(400, 'Invalid workshop ID');
        if (!getMongoId(userId)) throw new HttpError(400, 'Invalid user ID');

        const workshop = await WorkshopRepository.get({ _id: workshopId });
        if (!workshop) throw new HttpError(404, 'Workshop not found');

        // Check if user is already registered
        if (workshop.registeredUsers.includes(userId)) {
            throw new HttpError(400, 'User already registered for this workshop');
        }

        workshop.registeredUsers.push(userId);
        const updatedWorkshop = await WorkshopRepository.update({ _id: workshopId }, { registeredUsers: workshop.registeredUsers });
        return updatedWorkshop;
    }

    async unregisterFromWorkshop(workshopId: string, userId: string) {
        if (!getMongoId(workshopId)) throw new HttpError(400, 'Invalid workshop ID');
        if (!getMongoId(userId)) throw new HttpError(400, 'Invalid user ID');

        const workshop = await WorkshopRepository.get({ _id: workshopId });
        if (!workshop) throw new HttpError(404, 'Workshop not found');

        // Check if user is registered
        if (!workshop.registeredUsers.includes(userId)) {
            throw new HttpError(400, 'User is not registered to this workshop');
        }

        workshop.registeredUsers = workshop.registeredUsers.filter((id: (ObjectId | string)) => id.toString() !== userId);
        const updatedWorkshop = await WorkshopRepository.update({ _id: workshopId }, { registeredUsers: workshop.registeredUsers });
        return updatedWorkshop;
    }
}
