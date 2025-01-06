import { Request, Response, NextFunction, RequestHandler } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const validationMiddleware = (dtoClass: new () => any): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const dtoObj = plainToInstance(dtoClass, req.method === 'GET' ? req.query : req.body);
        const errors = await validate(dtoObj);

        if (errors.length > 0) {
            const errorMessages = errors.map((error) => Object.values(error.constraints || {})).flat();
            res.status(400).json({
                result: false,
                message: 'Validation failed',
                errors: errorMessages,
            });
            return;
        }

        if (req.method === 'GET') {
            req.query = dtoObj;
        } else {
            req.body = dtoObj;
        }
        next();
    };
};
