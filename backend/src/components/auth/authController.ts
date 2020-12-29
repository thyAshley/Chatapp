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

    res.send({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        avatar: user.avatar,
      },
      token,
    });
  } catch (error) {
    console.log(error);
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
    const token = await authService.generateToken(newUser.id!);
    res.send({
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        gender: newUser.gender,
        avatar: newUser.avatar,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    next(new UncaughtException());
  }
};
