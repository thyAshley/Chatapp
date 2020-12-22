import { Request, Response, NextFunction } from 'express';
import { CustomErrorAttribute } from '../utils/errors/errorTypes';

export const errorhandlingMiddleware = async (
  err: CustomErrorAttribute,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(err.status).send({
    name: err.name,
    msg: err.message,
    path: req.originalUrl,
    type: req.protocol,
    time: Date.now(),
  });
};
