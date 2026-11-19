import { Router } from "express";
import { blockChat, getAllChats, getChatMessages } from "../controllers";
import authMiddleware from "../middlewares/auth.middleware";

export default class ChatAPI {
    router: Router

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', getAllChats);
        this.router.get('/:chatId', getChatMessages);
        this.router.put('/block/:chatId', authMiddleware(), blockChat);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/chats';
    }
}
