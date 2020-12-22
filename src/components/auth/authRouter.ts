import express from 'express';

import * as userController from './authController';

const userRouter = express.Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.login);

export default userRouter;
