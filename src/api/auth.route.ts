import { Router } from "express";
import { appleLogin, googleLogin, loginUser, registerUser } from "../controllers";

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
        this.router.post('/apple', appleLogin);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/auth';
    }
}