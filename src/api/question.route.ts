import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { createQuestion, getAllQuestions, editQuestion, deleteQuestion } from "../controllers";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";

export default class QuestionAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // GET /question/         -> list all questions (protected)
        this.router.get("/", adminAuthMiddleware(), getAllQuestions);

        // POST /question/        -> create a new question (protected)
        this.router.post("/", authMiddleware(), createQuestion);

        // PUT /question/:id     -> update a question (protected)
        this.router.put("/:id", adminAuthMiddleware(), editQuestion);

        // DELETE /question/:id  -> delete a question (protected)
        this.router.delete("/:id", adminAuthMiddleware(), deleteQuestion);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return "/question";
    }
}