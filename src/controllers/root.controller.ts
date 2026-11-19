import { NextFunction, Request, Response } from "express";
import { generateResponse } from "../utils/helpers";
import packageJson from "../../package.json";
import asyncHandler from "../utils/asyncHandler";
import { STATUS_CODES } from "http";
import { ConferenceRepository, ExhibitionRepository, FeedbackRepository, QuestionRepository, SpeakerRepository, UserRepository, WorkshopRepository } from "../repositories";

export const defaultHandler = asyncHandler(async (req: Request, res: Response) => {
    generateResponse(null, `Health check passed - ${packageJson?.description} v${packageJson?.version} - ${process.env.NODE_ENV?.toUpperCase()}`, res);
});

export const uploadFiles = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const files = req.files;

    if (!files) return next({
        statusCode: STATUS_CODES.UNPROCESSABLE_ENTITY,
        message: 'No files uploaded'
    });

    if (req.fileValidationError) return next({
        statusCode: STATUS_CODES.UNPROCESSABLE_ENTITY,
        message: req.fileValidationError || 'Invalid file type!'
    });

    const acceptedFiles: Express.Multer.File[] = Array.isArray(files)
        ? (files as Express.Multer.File[])
        : (files as { [fieldname: string]: Express.Multer.File[] })['images'] ?? [];

    const imageUrls = acceptedFiles.map((file: Express.Multer.File) => `${process.env.BASE_URL}/${file.path}`);

    generateResponse(imageUrls, 'Files uploaded successfully', res);
});

export const getDashboardCounts = asyncHandler(async (req: Request, res: Response) => {
    const userCount = await UserRepository.countDocuments({ isDeleted: false });
    const conferenceCount = await ConferenceRepository.countDocuments();
    const exhibitionCount = await ExhibitionRepository.countDocuments();
    const speakerCount = await SpeakerRepository.countDocuments();
    const workshopCount = await WorkshopRepository.countDocuments();
    const feedbackCount = await FeedbackRepository.countDocuments();
    const questionCount = await QuestionRepository.countDocuments();

    generateResponse({
        userCount,
        conferenceCount,
        exhibitionCount,
        speakerCount,
        workshopCount,
        feedbackCount,
        questionCount
    }, 'Dashboard counts retrieved successfully', res);
});