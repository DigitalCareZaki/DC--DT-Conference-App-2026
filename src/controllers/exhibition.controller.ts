import { Request, Response } from "express";
import { ExhibitionService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const exhibitionService = new ExhibitionService();

export const getAllExhibitions = asyncHandler(async (req: Request, res: Response) => {
    const result = await exhibitionService.getAllExhibitions(req.query as any);
    generateResponse(result, 'Exhibitions retrieved successfully', res);
});

export const getExhibitionById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const exhibition = await exhibitionService.getExhibitionById(id);
    generateResponse(exhibition, 'Exhibition retrieved successfully', res);
});

export const createExhibition = asyncHandler(async (req: Request, res: Response) => {
    const exhibition = await exhibitionService.createExhibition(req.body);
    generateResponse(exhibition, 'Exhibition created successfully', res);
});

export const updateExhibition = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const exhibition = await exhibitionService.updateExhibition(id, req.body);
    generateResponse(exhibition, 'Exhibition updated successfully', res);
});

export const deleteExhibition = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const exhibition = await exhibitionService.deleteExhibition(id);
    generateResponse(exhibition, 'Exhibition deleted successfully', res);
});