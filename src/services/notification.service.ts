import { NotificationRepository } from "../repositories";
import { sendNotificationToTopic } from "../config/firebase.config";
import { HttpError } from "../utils/HttpError";

export class NotificationService {

    async getAllNotifications(requestQuery: any) {
        const { limit = 10, page = 1, populate, select, sort } = requestQuery;
        return await NotificationRepository.getAll({ query: {}, limit, page, populate, select, sort });
    }

    async createNotification(params: { title: string; message: string; data?: Record<string, string> }) {
        const { title, message, data } = params;
        if (!title) throw new HttpError(400, "Title is required");
        if (!message) throw new HttpError(400, "Message is required");

        const notification = await NotificationRepository.create({ title, message });
        try {
            await sendNotificationToTopic({ title, message, data });
        } catch (error) {
            console.error("Failed to send notification to topic:", error);
            throw new HttpError(500, "Failed to send notification");
        }

        return notification;
    }

}