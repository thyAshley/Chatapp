import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import {
  UserNotFoundException,
  InvalidCredentialsException,
  UncaughtException,
  EmailAlreadyExistException,
} from '../../utils/errors/errorService';
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
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      return next(new InvalidCredentialsException());
    }
    const token = await authService.generateToken(user.id!);
    res.send(token);
  } catch (error) {
    next(new UncaughtException());
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { firstName, lastName, email, gender, password } = req.body;
    const user = await authService.findUser(email);
    if (user) {
      return next(new EmailAlreadyExistException());
    }
    const newUser = await authService.createUser(
      firstName,
      lastName,
      password,
      email,
      gender,
    );
    res.send(newUser);
  } catch (error) {
    console.log(error);
    next(new UncaughtException());
  }
};
