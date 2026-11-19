import { HttpError } from "../utils/HttpError";
import { FeedbackRepository } from "../repositories";
import { getMongoId } from "../utils/helpers";

export class FeedbackService {
    async getAllFeedbacks(requestQuery: any) {
        const { limit = 10, page = 1, populate, select, sort } = requestQuery;
        const populateFields = populate ?? [{ path: 'userId', select: 'name email' }];
        return await FeedbackRepository.getAll({ query: {}, limit, page, populate: populateFields, select, sort });
    }

    async getUserFeedback(userId: string) {
        if (!getMongoId(userId)) throw new HttpError(400, 'Invalid user ID');
        const feedback = await FeedbackRepository.get({ userId }).populate("userId", "name email");
        if (!feedback) throw new HttpError(404, 'Feedback not found');
        return feedback;
    }

    async upsertFeedback(userId: string, data: any) {
        const feedback = await FeedbackRepository.upsert({ userId }, data);
        if (!feedback) throw new HttpError(404, 'Feedback not found');
        return feedback;
    }

}   
