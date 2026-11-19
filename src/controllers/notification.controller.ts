import { Request, Response } from "express";
import { NotificationService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const notificationService = new NotificationService();

export const getAllNotifications = asyncHandler(async (req: Request, res: Response) => {
    const notifications = await notificationService.getAllNotifications(req.query as any);
    generateResponse(notifications, 'Notifications retrieved successfully', res);
});

export const createNotification = asyncHandler(async (req: Request, res: Response) => {
    const notification = await notificationService.createNotification(req.body);
    generateResponse(notification, 'Notification created successfully', res);
});

export const deleteNotification = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const notification = await notificationService.deleteNotification(id);
    generateResponse(notification, 'Notification deleted successfully', res);
});
