import { Request, Response } from "express";
import { FeedbackService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const feedbackService = new FeedbackService();

export const getUserFeedback = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id;
    const feedback = await feedbackService.getUserFeedback(userId);
    generateResponse(feedback, 'User feedback retrieved successfully', res);
});

export const getAllFeedbacks = asyncHandler(async (req: Request, res: Response) => {
    const feedbacks = await feedbackService.getAllFeedbacks(req.query);
    generateResponse(feedbacks, 'All feedbacks retrieved successfully', res);
});

export const submitOrUpdateFeedback = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user._id;
    const feedback = await feedbackService.upsertFeedback(userId, req.body);
    generateResponse(feedback, 'Feedback submitted or updated successfully', res);
});