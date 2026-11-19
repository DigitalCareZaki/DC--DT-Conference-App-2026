import { Router } from "express";
import { getAllNotifications, createNotification, deleteNotification } from "../controllers";

export default class NotificationAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', getAllNotifications);
        this.router.post('/', createNotification);
        this.router.delete('/:id', deleteNotification);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/notification';
    }
}
