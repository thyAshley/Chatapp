import express from 'express';
import { body } from 'express-validator';
import { InputValidationMiddleware } from '../../middleware/InputValidationMiddleware';

import * as userController from './authController';

const userRouter = express.Router();

userRouter.post('/login', userController.login);
userRouter.post(
  '/register',
  [
    body('firstName')
      .trim()
      .notEmpty()
      .withMessage('First Name should not be empty'),
    body('lastName')
      .trim()
      .notEmpty()
      .withMessage('Last Name should not be empty'),
    body('password')
      .notEmpty()
      .withMessage('Password should not be empty')
      .bail()
      .isLength({ min: 5 })
      .withMessage('Password should at least be 5 character long'),
    body('gender').notEmpty().withMessage('Gender should not be empty'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email should not be empty')
      .bail()
      .isEmail()
      .withMessage('Please provide a valid email'),
  ],
  InputValidationMiddleware,
  userController.register,
);

export default userRouter;
