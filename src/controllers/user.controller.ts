import { Request, Response } from "express";
import { UserService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const userService = new UserService();

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const users = await userService.fetchAllUsers(req.query as any, userId);
    generateResponse(users, 'Users retrieved successfully', res);
});

export const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const user = await userService.getUserById(userId);
    generateResponse(user, 'User profile retrieved successfully', res);
});

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    generateResponse(user, 'User retrieved successfully', res);
});

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.registerUser(req.body);
    generateResponse(result, 'Registration successful. Please verify the OTP sent to your email.', res);
});

export const googleLogin = asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.googleLogin(req.body);
    generateResponse(user, 'User logged in successfully with Google', res);
});

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.loginUser(req.body);
    if (user.isVerified === false) {
        return generateResponse(user, 'Please verify the OTP sent to your email.', res);
    }
    generateResponse(user, 'User logged in successfully', res);
});

export const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const updatedUser = await userService.updateUser(userId, req.body);
    generateResponse(updatedUser, 'User profile updated successfully', res);
});

export const sendOtp = asyncHandler(async (req: Request, res: Response) => {
    const { email, purpose } = req.body;
    const response = await userService.sendOtp(email, purpose);
    generateResponse(response, 'OTP sent successfully', res);
});

export const verifyOtp = asyncHandler(async (req: Request, res: Response) => {
    const { email, otp, purpose } = req.body;
    const response = await userService.verifyOtp(email, otp, purpose);
    generateResponse(response, 'OTP verified successfully', res);
});

export const resetPassword = asyncHandler(async (req: Request, res: Response) => {
    const { email, newPassword, token } = req.body;
    const response = await userService.resetPassword(email, newPassword, token);
    generateResponse(response, 'Password reset successfully', res);
});

export const addOrRemoveFavorites = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const { type, favoriteId } = req.body;
    const favorites = await userService.addOrRemoveFavorites(userId, type, favoriteId);
    generateResponse(favorites, 'Favorites updated successfully', res);
});

export const getUserFavorites = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const favorites = await userService.getUserFavorites(userId, req.query);
    generateResponse(favorites, 'User favorites retrieved successfully', res);
});

export const softDeleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await userService.softDeleteUser(id);
    generateResponse(deletedUser, 'User account deleted successfully', res);
});
