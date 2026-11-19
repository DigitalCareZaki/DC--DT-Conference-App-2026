import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import {
    addOrRemoveFavorites,
    getAllUsers,
    getUserFavorites,
    getUserProfile,
    softDeleteUser,
    updateUserProfile,
    resetPassword,
    sendOtp,
    verifyOtp,
    getUserById
} from "../controllers";

export default class UserAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        // GET /user/         -> list users (public)
        this.router.get("/", authMiddleware(), getAllUsers);

        // Protected (require auth)
        this.router.get("/details/:id", authMiddleware(), getUserById);

        // GET /user/profile  -> current user's profile
        this.router.get("/profile", authMiddleware(), getUserProfile);
        // GET /user/favorites-> current user's favorites
        this.router.get("/favorites", authMiddleware(), getUserFavorites);

        // POST /user/favorites -> add or remove a favorite
        this.router.post("/favorites", authMiddleware(), addOrRemoveFavorites);


        this.router.post('/send-otp', sendOtp);
        this.router.post('/verify-otp', verifyOtp);
        this.router.post('/reset-password', resetPassword);

        // PUT /user/update   -> update current user's profile
        this.router.put("/update", authMiddleware(), updateUserProfile);

        // soft delete user account
        this.router.delete("/delete/:id", authMiddleware(), softDeleteUser);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return "/user";
    }
}
