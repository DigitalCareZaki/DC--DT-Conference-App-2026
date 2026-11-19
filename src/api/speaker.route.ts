import { Router } from "express";
import {
    getAllSpeakers,
    getSpeakerById,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
} from "../controllers";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";

export default class SpeakerAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // GET /api/speaker - Get all speakers with pagination and search
        this.router.get('/', getAllSpeakers);

        // GET /api/speaker/:id - Get speaker by ID
        this.router.get('/:id', getSpeakerById);

        // POST /api/speaker - Create new speaker
        this.router.post('/', adminAuthMiddleware(), createSpeaker);

        // PUT /api/speaker/:id - Update speaker
        this.router.put('/:id', adminAuthMiddleware(), updateSpeaker);

        // DELETE /api/speaker/:id - Delete speaker
        this.router.delete('/:id', adminAuthMiddleware(), deleteSpeaker);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/speaker';
    }
}
