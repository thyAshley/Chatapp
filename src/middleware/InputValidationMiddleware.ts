import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { DynamicObject } from '../components/auth/authTypes';

import { InputValidationError } from '../utils/errors/errorService';

export const InputValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationError: DynamicObject = {};
    errors.array().map((err) => {
      validationError[err.param] = err.msg;
    });
    return next(new InputValidationError(validationError));
  }
  next();
};
