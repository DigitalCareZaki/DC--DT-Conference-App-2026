import { Router } from "express";
import { defaultHandler, getDashboardCounts, uploadFiles } from "../controllers";
import { fileUploader } from "../utils/multer";
import adminAuthMiddleware from "../middlewares/admin-auth.middleware";

export default class RootAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', defaultHandler);
        this.router.get('/counts', adminAuthMiddleware(), getDashboardCounts);
        this.router.post('/upload', fileUploader.fields([{ name: 'images', maxCount: 5 }]), uploadFiles);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/';
    }
}