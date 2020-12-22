import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import { UserNotFoundException } from '../../utils/errors/errorList';
import * as authService from './authService';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  try {
    const user = await authService.findUser(email);
    if (!user) {
      return next(new UserNotFoundException());
    }
    await bcrypt.compare(password, user.password);
  } catch (error) {}
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  res.send('ok');
};
