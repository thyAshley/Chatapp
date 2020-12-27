import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
dotenv.config();

import AuthRouter from './components/auth/authRouter';
import UserRouter from './components/user/userRouter';
import { errorhandlingMiddleware } from './middleware/ErrorhandlingMiddleware';

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', AuthRouter);
app.use('/api/v1/user', UserRouter);

app.use(errorhandlingMiddleware);

export default app;
