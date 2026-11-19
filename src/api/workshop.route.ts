import { Router } from "express";
import {
    getAllWorkshops,
    getWorkshopById,
    createWorkshop,
    updateWorkshop,
    deleteWorkshop,
    registerForWorkshop,
    unregisterFromWorkshop
} from "../controllers";
import authMiddleware from "../middlewares/auth.middleware";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";

export default class WorkshopAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // GET /api/workshop - Get all workshops with pagination and search
        this.router.get('/', getAllWorkshops);

        // GET /api/workshop/:id - Get workshop by ID
        this.router.get('/:id', getWorkshopById);

        // POST /api/workshop - Create new workshop
        this.router.post('/', adminAuthMiddleware(), createWorkshop);

        // PUT /api/workshop/:id - Update workshop
        this.router.put('/:id', adminAuthMiddleware(), updateWorkshop);

        // DELETE /api/workshop/:id - Delete workshop
        this.router.delete('/:id', adminAuthMiddleware(), deleteWorkshop);

        // POST /api/workshop/:id/register - Register for workshop
        this.router.post('/:id/register', authMiddleware(), registerForWorkshop);

        // PUT /api/workshop/:id/unregister - Unregister from workshop
        this.router.put('/:id/unregister', authMiddleware(), unregisterFromWorkshop);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/workshop';
    }
}
