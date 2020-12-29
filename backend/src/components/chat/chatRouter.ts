import express from 'express';
import * as chatController from './chatController';

const router = express.Router();

router.post('/', chatController.index);

export default router;
