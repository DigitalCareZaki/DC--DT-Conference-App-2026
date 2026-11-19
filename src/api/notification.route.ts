import { Router } from "express";
import { getAllNotifications, createNotification } from "../controllers";

export default class NotificationAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', getAllNotifications);
        this.router.post('/', createNotification);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/notification';
    }
}