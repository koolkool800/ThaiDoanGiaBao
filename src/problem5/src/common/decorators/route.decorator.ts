import { Router } from 'express';

export const Get = (path: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (target: any, propertyKey: string) => {
        if (!target.router) target.router = Router();

        target.router.get(path, target[propertyKey]);
    };
};
