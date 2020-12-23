import { Request, Response, NextFunction } from 'express';
import { CustomErrorAttribute } from '../utils/errors/errorTypes';
interface ErrorBodyAttribute {
  [key: string]: string | Date | number;
}
export const errorhandlingMiddleware = async (
  err: CustomErrorAttribute,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let errorBody: ErrorBodyAttribute = {
    name: err.name,
    msg: err.message,
    path: `[${req.method}]: ${req.originalUrl}`,
    time: Date.now(),
  };
  return res.status(err.status).send(errorBody);
};
