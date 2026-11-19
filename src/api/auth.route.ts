import { Router } from "express";
import { googleLogin, loginUser, registerUser } from "../controllers";

export default class AuthAPI {
    router: Router

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/register', registerUser);
        this.router.post('/login', loginUser);
        this.router.post('/google', googleLogin);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/auth';
    }
}