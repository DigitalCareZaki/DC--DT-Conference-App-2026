import { Request, Response } from "express";
import { WorkshopService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const workshopService = new WorkshopService();

export const getAllWorkshops = asyncHandler(async (req: Request, res: Response) => {
    const result = await workshopService.getAllWorkshops(req.query as any);
    generateResponse(result, 'Workshops retrieved successfully', res);
});

export const getWorkshopById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const workshop = await workshopService.getWorkshopById(id);
    generateResponse(workshop, 'Workshop retrieved successfully', res);
});

export const createWorkshop = asyncHandler(async (req: Request, res: Response) => {
    const workshop = await workshopService.createWorkshop(req.body);
    generateResponse(workshop, 'Workshop created successfully', res);
});

export const updateWorkshop = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const workshop = await workshopService.updateWorkshop(id, req.body);
    generateResponse(workshop, 'Workshop updated successfully', res);
});

export const deleteWorkshop = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const workshop = await workshopService.deleteWorkshop(id);
    generateResponse(workshop, 'Workshop deleted successfully', res);
});

export const registerForWorkshop = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const registration = await workshopService.registerForWorkshop(id, userId);
    generateResponse(registration, 'Registered for workshop successfully', res);
});

export const unregisterFromWorkshop = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const unregistration = await workshopService.unregisterFromWorkshop(id, userId);
    generateResponse(unregistration, 'Unregistered from workshop successfully', res);
});
