import { PipelineStage } from "mongoose";
import { getMongoId } from "../utils/helpers";
import { ChatRepository, MessageRepository } from "../repositories";
import { HttpError } from "../utils/HttpError";
import { IChat } from "../schema";
import { getUserChatsQuery } from "./queries/chat.query";

export class ChatService {

    async getAllChats(requestQuery: any) {
        const { limit = 10, page = 1, populate, select, sort } = requestQuery;
        return await ChatRepository.getAll({ query: {}, limit, page, populate, select, sort });
    }

    async createChat(params: { participants: any[] }) {
        const participants = (params.participants || []).map(getMongoId);

        const existing = await ChatRepository.get({ participants: { $all: participants } });
        const chat: IChat = existing || await ChatRepository.create({ participants });

        const rawMessages = await MessageRepository.findAll(
            { chatId: chat._id },
            null,
            { sort: { createdAt: -1 }, lean: true }
        );
        const messageHistory = Array.isArray(rawMessages) ? rawMessages.reverse() : [];

        return { chat, messageHistory };
    }

    async getChatById(id: any) {
        if (!id) throw new HttpError(400, "Chat id is required");
        return ChatRepository.get({ _id: getMongoId(id) });
    }

    async getUserChats(userId: string) {
        const userObjectId = getMongoId(userId);
        if (!userObjectId) {
            throw new HttpError(400, "User id is required");
        }

        const query = getUserChatsQuery(userObjectId);

        const result = await ChatRepository.getAllAggregate({
            query,
            page: 1,
            limit: 1000,
        });

        return result;
    }

    async getChatMessages(chatId: string) {
        if (!chatId) {
            throw new HttpError(400, "Chat id is required");
        }
        const chat = await ChatRepository.get({ _id: getMongoId(chatId) });
        if (!chat) {
            throw new HttpError(404, "Chat not found");
        }
        const messages = await MessageRepository.findAll({ chatId: getMongoId(chatId) }, null, {
            lean: true,
            sort: { createdAt: -1 },
        });
        return messages;
    }

    async blockChat(chatId: string) {
        if (!chatId) {
            throw new HttpError(400, "Chat id is required");
        }
        const chatMongoId = getMongoId(chatId);
        const existingChat = await ChatRepository.get({ _id: chatMongoId });
        if (!existingChat) {
            throw new HttpError(404, "Chat not found");
        }
        if (existingChat.isBlocked) {
            return existingChat;
        }
        const chat = await ChatRepository.update(
            { _id: chatMongoId },
            { isBlocked: true },
            { new: true }
        );
        if (!chat) {
            throw new HttpError(404, "Chat not found");
        }
        return chat;
    }

    async markMessagesAsRead(chatId: string, userId: string) {
        const chatMongoId = getMongoId(chatId);
        const userMongoId = getMongoId(userId);


        await MessageRepository.updateMany(
            { chatId: chatMongoId, receiver: userMongoId, isRead: false },
            { isRead: true }
        );

        return { success: true, messages: 'Messages marked as read' };
    };

}
