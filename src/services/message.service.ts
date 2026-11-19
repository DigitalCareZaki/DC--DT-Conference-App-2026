import { getMongoId } from "../utils/helpers";
import { MessageRepository, ChatRepository } from "../repositories";
import { HttpError } from "../utils/HttpError";
import { IChat } from "../schema";

export class MessageService {

    async createMessage(params: { chatId: any; senderId: any; message?: string; type?: string; attachments?: any[] }) {
        const chat: IChat | null = await ChatRepository.get({ _id: getMongoId(params.chatId) });
        if (!chat) {
            throw new HttpError(400, "Invalid chat id");
        }
        if (chat.isBlocked) {
            throw new HttpError(403, "Chat is blocked");
        }
        let receiverId: any = undefined;
        if (Array.isArray(chat.participants) && chat.participants.length === 2) {
            const participants: any[] = chat.participants;
            const senderHex = getMongoId(params.senderId).toString();
            const other = participants.find((p) => getMongoId(p).toString() !== senderHex);
            if (other) receiverId = other;
        }

        const attachments = Array.isArray(params.attachments) ? params.attachments : [];
        const receiver = receiverId ? getMongoId(receiverId) : undefined;

        if (!receiver) {
            throw new HttpError(400, "Receiver not found");
        }

        const msg = await MessageRepository.create({
            chatId: getMongoId(params.chatId),
            sender: getMongoId(params.senderId),
            receiver,
            message: params.message ?? "",
            type: params.type || "text",
            attachments,
        });

        await ChatRepository.update(
            { _id: getMongoId(params.chatId) },
            { lastMessage: msg._id, updatedAt: new Date() },
            { new: true }
        );

        return msg;
    }

}

export default MessageService;
