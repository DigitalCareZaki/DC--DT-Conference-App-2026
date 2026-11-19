import { Router } from "express";
import {
    getAllConferences,
    getConferenceById,
    createConference,
    updateConference,
    deleteConference,
    registerForConference,
    unregisterFromConference
} from "../controllers";
import authMiddleware from "../middlewares/auth.middleware";
import { ROLE } from "../utils/constants";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";

export default class ConferenceAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // GET /api/conference - Get all conferences with pagination and search
        this.router.get('/', getAllConferences);

        // GET /api/conference/:id - Get conference by ID
        this.router.get('/:id', getConferenceById);

        // POST /api/conference - Create new conference
        this.router.post('/', adminAuthMiddleware(), createConference);

        // PUT /api/conference/:id - Update conference
        this.router.put('/:id', adminAuthMiddleware(), updateConference);

        // DELETE /api/conference/:id - Delete conference
        this.router.delete('/:id', adminAuthMiddleware(), deleteConference);

        // POST /api/conference/:id/register - Register for conference
        this.router.post('/:id/register', authMiddleware(), registerForConference);

        // PUT /api/conference/:id/unregister - Unregister from conference
        this.router.put('/:id/unregister', authMiddleware(), unregisterFromConference);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/conference';
    }
}
