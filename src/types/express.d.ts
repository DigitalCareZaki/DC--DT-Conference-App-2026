import "express";
import type { IRequestedUser, MulterFilesMap } from "../utils/interfaces";

declare global {
    namespace Express {
        interface Request {
            user: IRequestedUser;
            session?: { accessToken: string };
            files?: MulterFilesMap | Express.Multer.File[];
            file?: Express.Multer.File;
            fileValidationError?: string;
        }
    }
}
