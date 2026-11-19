import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ROLE, STATUS_CODES } from '../utils/constants';

const adminAuthMiddleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const accessToken = req.headers.authorization?.split(' ')[1] ?? req.session?.accessToken;
        if (!accessToken) return next({ statusCode: STATUS_CODES.UNAUTHORIZED, message: 'Authorization failed!' });

        verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string, async (err: any, decoded: any) => {
            if (err) return next({ statusCode: STATUS_CODES.UNAUTHORIZED, message: 'Invalid token!' });

            req.user = { ...decoded };

            if (req.user.role !== ROLE.ADMIN) return next({ statusCode: STATUS_CODES.FORBIDDEN, message: 'Insufficient privileges!' });

            // next middleware is called
            next();
        });
    };
};

export default adminAuthMiddleware;
