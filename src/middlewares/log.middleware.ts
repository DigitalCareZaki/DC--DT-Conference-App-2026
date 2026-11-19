import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/helpers";

export const httpLogger = (req: Request, res: Response, next: NextFunction) => {
    // High-resolution start time
    const startTime = process.hrtime.bigint();

    // Run AFTER response is finished
    res.on("finish", () => {
        const endTime = process.hrtime.bigint();
        const diffMs = Number(endTime - startTime) / 1_000_000; // ns -> ms

        // Content-Length header (might be undefined if chunked)
        const contentLength = res.getHeader("content-length") || 0;

        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${diffMs.toFixed(3)} ms - ${contentLength}`, "HTTP");
    });

    next();
};
