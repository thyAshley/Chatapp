import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UnauthorizedException } from '../utils/errors/errorService';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  console.log(req.files, req.file);
  if (!authHeader) {
    return next(new UnauthorizedException('No token was passed'));
  }
  const providedToken = authHeader.split(' ')[1];
  try {
    const result = jwt.verify(providedToken, process.env.JWT_SECRET!);
    res.locals.user = result;
    next();
  } catch (error) {
    return next(
      new UnauthorizedException('Invalid or expired token was passed'),
    );
  }
};
