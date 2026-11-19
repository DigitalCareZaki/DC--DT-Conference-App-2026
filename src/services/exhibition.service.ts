import { HttpError } from "../utils/HttpError";
import { ExhibitionRepository, UserRepository } from "../repositories";
import { GetPaginationQueryParams } from "../utils/interfaces";
import { getMongoId } from "../utils/helpers";
import { getAllExhibitionsQuery } from "./queries/exhibition.query";
import { Types } from "mongoose";
import { FAVORITE_TYPE } from "../utils/constants";

export class ExhibitionService {

    private async removeExhibitionFromFavorites(exhibitionId: string) {
        const favoriteObjectId = new Types.ObjectId(exhibitionId);
        await UserRepository.updateMany(
            {
                favorites: {
                    $elemMatch: {
                        type: FAVORITE_TYPE.EXHIBITION,
                        favoriteId: favoriteObjectId,
                    },
                },
            },
            {
                $pull: {
                    favorites: {
                        type: FAVORITE_TYPE.EXHIBITION,
                        favoriteId: favoriteObjectId,
                    },
                },
            }
        );
    }

    private async getUserFavoriteExhibitionIds(userId: string): Promise<Types.ObjectId[]> {
        const user = await UserRepository.get({ _id: userId }, "favorites").lean();
        const favoriteExhibitionIds = ((user?.favorites ?? [])
            .filter(({ type }) => type === FAVORITE_TYPE.EXHIBITION)
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
        return favoriteExhibitionIds;
    }

    async getAllExhibitions(queryParams: GetPaginationQueryParams) {
        const { search = "", page = 1, limit = 10 } = queryParams;

        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;


        // const favoriteExhibitionIds = await this.getUserFavoriteExhibitionIds(userId);
        // const query = getAllExhibitionsQuery(search, favoriteExhibitionIds);

        const aggregationPipeline = getAllExhibitionsQuery(search);

        return await ExhibitionRepository.getAllAggregate({
            query: aggregationPipeline,
            page: pageNum,
            limit: limitNum,
        });
    }

    async getExhibitionById(id: string) {
        if (!getMongoId(id)) throw new HttpError(422, 'Invalid exhibition ID');
        const exhibition = await ExhibitionRepository.get({ _id: id });
        if (!exhibition) throw new HttpError(400, 'Exhibition not found');
        return exhibition;
    }

    async createExhibition(data: any) {
        const exhibition = await ExhibitionRepository.create(data);
        return exhibition;
    }

    async updateExhibition(id: string, data: any) {
        if (!getMongoId(id)) throw new HttpError(422, 'Invalid exhibition ID');

        const exhibition = await ExhibitionRepository.update({ _id: id }, data);
        if (!exhibition) throw new HttpError(400, 'Exhibition not found');
        return exhibition;
    }

    async deleteExhibition(id: string) {
        if (!getMongoId(id)) throw new HttpError(422, 'Invalid exhibition ID');
        const exhibition = await ExhibitionRepository.delete({ _id: id });
        if (!exhibition) throw new HttpError(400, 'Exhibition not found');
        await this.removeExhibitionFromFavorites(id);
        return exhibition;
    }
}
