import { Router } from "express";
import {
    getAllGalleries,
    getGalleryById,
    createGallery,
    updateGallery,
    deleteGallery,
} from "../controllers";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";

export default class GalleryAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', getAllGalleries);
        this.router.get('/:id', getGalleryById);
        this.router.post('/', adminAuthMiddleware(), createGallery);
        this.router.put('/:id', adminAuthMiddleware(), updateGallery);
        this.router.delete('/:id', adminAuthMiddleware(), deleteGallery);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/gallery';
    }
}
