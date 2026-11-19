import { Request, Response, NextFunction } from 'express';

/**
 * Express async wrapper that returns the underlying Promise so callers can await it (useful in tests).
 */
export default function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => any | Promise<any>) {
    return function wrappedAsyncHandler(req: Request, res: Response, next: NextFunction) {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
}


