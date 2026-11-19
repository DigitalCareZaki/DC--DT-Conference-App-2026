import { Router } from "express";
import { getAllFeedbacks, getUserFeedback, submitOrUpdateFeedback } from "../controllers";
import authMiddleware from "../middlewares/auth.middleware";

class FeedbackAPI {
    router: Router

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', authMiddleware(), getAllFeedbacks);
        this.router.get('/user', authMiddleware(), getUserFeedback);
        this.router.put('/submit-update', authMiddleware(), submitOrUpdateFeedback);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/feedbacks';
    }
}

export default FeedbackAPI;
