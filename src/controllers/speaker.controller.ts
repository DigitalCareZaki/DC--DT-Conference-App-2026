import { Request, Response } from "express";
import { SpeakerService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const speakerService = new SpeakerService();

export const getAllSpeakers = asyncHandler(async (req: Request, res: Response) => {
    const result = await speakerService.getAllSpeakers(req.query as any);
    generateResponse(result, 'Speakers retrieved successfully', res);
});

export const getSpeakerById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const speaker = await speakerService.getSpeakerById(id);
    generateResponse(speaker, 'Speaker retrieved successfully', res);
});

export const createSpeaker = asyncHandler(async (req: Request, res: Response) => {
    const speaker = await speakerService.createSpeaker(req.body);
    generateResponse(speaker, 'Speaker created successfully', res);
});

export const updateSpeaker = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const speaker = await speakerService.updateSpeaker(id, req.body);
    generateResponse(speaker, 'Speaker updated successfully', res);
});

export const deleteSpeaker = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const speaker = await speakerService.deleteSpeaker(id);
    generateResponse(speaker, 'Speaker deleted successfully', res);
});