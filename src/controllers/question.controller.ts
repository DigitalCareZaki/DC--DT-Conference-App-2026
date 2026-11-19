import { Request, Response } from "express";
import { QuestionService } from "../services";
import asyncHandler from "../utils/asyncHandler";
import { generateResponse } from "../utils/helpers";

const questionService = new QuestionService();

export const createQuestion = asyncHandler(async (req: Request, res: Response) => {
    const question = await questionService.createQuestion({
        userId: req.user._id,
        speakerId: req.body.speakerId,
        questionText: req.body.questionText
    });
    generateResponse(question, "Question created successfully", res);
});

export const getAllQuestions = asyncHandler(async (req: Request, res: Response) => {
    const questions = await questionService.getAllQuestions(req.query);
    generateResponse(questions, "All questions fetched successfully", res);
});

export const editQuestion = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedQuestion = await questionService.editQuestion(id, req.body);
    generateResponse(updatedQuestion, "Question updated successfully", res);
});

export const deleteQuestion = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedQuestion = await questionService.deleteQuestion(id);
    generateResponse(deletedQuestion, "Question deleted successfully", res);
});