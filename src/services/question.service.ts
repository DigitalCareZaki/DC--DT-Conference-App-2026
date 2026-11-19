import { getMongoId } from "../utils/helpers";
import { QuestionRepository } from "../repositories";
import { HttpError } from "../utils/HttpError";
import { IQuestion } from "../schema";

export class QuestionService {
    async createQuestion(data: { userId: any; speakerId: any; questionText: string; }): Promise<IQuestion> {
        const { userId, speakerId, questionText } = data;
        if (!speakerId || !questionText) {
            throw new HttpError(400, "speakerId and questionText are required");
        }
        const question: IQuestion = await QuestionRepository.create({
            userId: getMongoId(userId),
            speakerId: getMongoId(speakerId),
            questionText
        });
        return question;
    }

    async getAllQuestions(requestQuery: { limit?: number; page?: number; populate?: any; select?: any; sort?: any; } = {}): Promise<any> {
        const { limit = 10, page = 1, populate, select, sort } = requestQuery;
        const populateFields = populate ?? [{ path: 'speakerId' }, { path: 'userId' }];
        return await QuestionRepository.getAll({ query: {}, limit, page, populate: populateFields, select, sort });
    }

    async editQuestion(id: any, data: Partial<IQuestion>): Promise<IQuestion | null> {
        if (!id) throw new HttpError(400, "Question id is required");
        const question = await QuestionRepository.update({ _id: getMongoId(id) }, data);
        if (!question) throw new HttpError(404, "Question not found");
        return question;
    }

    async deleteQuestion(id: any): Promise<IQuestion | null> {
        if (!id) throw new HttpError(400, "Question id is required");
        const question = await QuestionRepository.delete({ _id: getMongoId(id) });
        if (!question) throw new HttpError(404, "Question not found");
        return question;
    }
}
