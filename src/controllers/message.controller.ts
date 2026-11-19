import { MessageService } from "../services";

const messageService = new MessageService();

export const createMessage = async (params: { chatId: any; senderId: any; message?: string; type?: string; attachments?: any[] }) => {
    return messageService.createMessage(params);
}

