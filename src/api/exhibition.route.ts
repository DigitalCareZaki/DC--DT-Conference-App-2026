import { Router } from "express";
import {
    getAllExhibitions,
    getExhibitionById,
    createExhibition,
    updateExhibition,
    deleteExhibition,
} from "../controllers";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";
import authMiddleware from "../middlewares/auth.middleware";

export default class ExhibitionAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // GET /api/exhibition - Get all exhibitions with pagination and search
        this.router.get('/', getAllExhibitions);

        // GET /api/exhibition/:id - Get exhibition by ID
        this.router.get('/:id', getExhibitionById);

        // POST /api/exhibition - Create new exhibition
        this.router.post('/', adminAuthMiddleware(), createExhibition);

        // PUT /api/exhibition/:id - Update exhibition
        this.router.put('/:id', adminAuthMiddleware(), updateExhibition);

        // DELETE /api/exhibition/:id - Delete exhibition
        this.router.delete('/:id', adminAuthMiddleware(), deleteExhibition);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/exhibition';
    }
}
