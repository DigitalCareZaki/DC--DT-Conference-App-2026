import { Request, Response } from "express";
import { ConferenceService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const conferenceService = new ConferenceService();

export const getAllConferences = asyncHandler(async (req: Request, res: Response) => {
    const result = await conferenceService.getAllConferences(req.query as any);
    generateResponse(result, 'Conferences retrieved successfully', res);
});

export const getConferenceById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const conference = await conferenceService.getConferenceById(id);
    generateResponse(conference, 'Conference retrieved successfully', res);
});

export const createConference = asyncHandler(async (req: Request, res: Response) => {
    const conference = await conferenceService.createConference(req.body);
    generateResponse(conference, 'Conference created successfully', res);
});

export const updateConference = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const conference = await conferenceService.updateConference(id, req.body);
    generateResponse(conference, 'Conference updated successfully', res);
});

export const deleteConference = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const conference = await conferenceService.deleteConference(id);
    generateResponse(conference, 'Conference deleted successfully', res);
});

export const registerForConference = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const registration = await conferenceService.registerUserToConference(id, userId);
    generateResponse(registration, 'Registered for conference successfully', res);
});

export const unregisterFromConference = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id; // Assuming req.user is populated by authentication middleware
    const unregistration = await conferenceService.unregisterUserFromConference(id, userId);
    generateResponse(unregistration, 'Unregistered from conference successfully', res);
});