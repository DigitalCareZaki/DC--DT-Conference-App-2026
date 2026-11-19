import { Request, Response } from "express";
import { GalleryService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const galleryService = new GalleryService();

export const getAllGalleries = asyncHandler(async (req: Request, res: Response) => {
    const galleries = await galleryService.getAllGalleries(req.query);
    generateResponse(galleries, "Retrieved successfully", res);
});

export const getGalleryById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const gallery = await galleryService.getGalleryById(id);
    generateResponse(gallery, "Retrieved successfully", res);
});

export const createGallery = asyncHandler(async (req: Request, res: Response) => {
    const gallery = await galleryService.createGallery(req.body);
    generateResponse(gallery, "Created successfully", res);
});

export const updateGallery = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const gallery = await galleryService.updateGallery(id, req.body);
    generateResponse(gallery, "Updated successfully", res);
});

export const deleteGallery = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const gallery = await galleryService.deleteGallery(id);
    generateResponse(gallery, "Deleted successfully", res);
});
