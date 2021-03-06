import { Request, Response, NextFunction } from 'express';

import { UncaughtException } from '../../utils/errors/errorService';
import * as UserService from './userService';

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserService.updateUser(
      res.locals.user.id,
      req.body,
      req.file,
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    next(new UncaughtException());
  }
};
