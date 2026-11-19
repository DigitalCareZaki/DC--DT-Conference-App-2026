import { Request, Response } from "express";
import { ChatService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const chatService = new ChatService();

export const createChat = async (params: { participants: any[] }) => {
    return await chatService.createChat(params);
}

export const getChatById = async (id: any) => {
    return await chatService.getChatById(id);
}

export const getUserChats = async (userId: any) => {
    const userChats = await chatService.getUserChats(userId);
    return userChats;
}

export const readMessages = (chatId: any, userId: any) => {
    return chatService.markMessagesAsRead(chatId, userId);
}

export const getChatMessages = asyncHandler(async (req: Request, res: Response) => {
    const { chatId } = req.params;
    const messages = await chatService.getChatMessages(chatId);
    generateResponse(messages, 'Chat messages retrieved successfully', res);
})

export const getAllChats = asyncHandler(async (req: Request, res: Response) => {
    const chats = await chatService.getAllChats(req.query);
    generateResponse(chats, 'All chats retrieved successfully', res);
});

export const blockChat = asyncHandler(async (req: Request, res: Response) => {
    const { chatId } = req.params;
    const updatedChat = await chatService.blockChat(chatId);
    generateResponse(updatedChat, 'Chat blocked successfully', res);
});
