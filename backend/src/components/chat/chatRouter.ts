import express from 'express';
import { authMiddleware } from '../../middleware/AuthMiddleware';
import * as chatController from './chatController';

const router = express.Router();

router.post('/', authMiddleware, chatController.index);

export default router;
