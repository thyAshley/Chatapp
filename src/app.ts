import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import userRouter from './components/auth/authRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users', userRouter);

export default app;
