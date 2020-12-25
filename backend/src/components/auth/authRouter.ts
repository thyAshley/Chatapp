import express from 'express';
import { InputValidationMiddleware } from '../../middleware/InputValidationMiddleware';
import { RegisterRules, LoginRules } from '../../middleware/rules';

import * as userController from './authController';

const userRouter = express.Router();

userRouter.post(
  '/login',
  LoginRules,
  InputValidationMiddleware,
  userController.login,
);
userRouter.post(
  '/register',
  RegisterRules,
  InputValidationMiddleware,
  userController.register,
);

export default userRouter;
