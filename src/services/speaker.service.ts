import { HttpError } from "../utils/HttpError";
import { SpeakerRepository } from "../repositories";
import { GetPaginationQueryParams } from "../utils/interfaces";
import { getMongoId } from "../utils/helpers";
import { SPEAKER_TYPE } from "../utils/constants";

export class SpeakerService {
    async getAllSpeakers(queryParams: GetPaginationQueryParams) {
        const { type, search = "", page = 1, limit = 10 } = queryParams;

        const pageNum = Number(page);
        const limitNum = Number(limit);

        if (type && !Object.values(SPEAKER_TYPE).includes(type as SPEAKER_TYPE)) {
            throw new HttpError(400, 'Invalid speaker type');
        }

        const query = {
            ...(type ? { speakerType: type } : {}),
            $or: [
                { name: { $regex: search, $options: 'i' } },
            ]
        };

        return await SpeakerRepository.getAll({
            query,
            page: pageNum,
            limit: limitNum,
        });
    }

    async getSpeakerById(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid speaker ID');
        const speaker = await SpeakerRepository.get({ _id: id });
        if (!speaker) throw new HttpError(404, 'Speaker not found');
        return speaker;
    }

    async createSpeaker(data: any) {
        const speaker = await SpeakerRepository.create(data);
        return speaker;
    }

    async updateSpeaker(id: string, data: any) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid speaker ID');
        const speaker = await SpeakerRepository.update({ _id: id }, data);
        if (!speaker) throw new HttpError(404, 'Speaker not found');
        return speaker;
    }

    async deleteSpeaker(id: string) {
        if (!getMongoId(id)) throw new HttpError(400, 'Invalid speaker ID');
        const speaker = await SpeakerRepository.delete({ _id: id });
        if (!speaker) throw new HttpError(404, 'Speaker not found');
        return speaker;
    }
}
