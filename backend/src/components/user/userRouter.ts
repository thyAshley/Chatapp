import express, { NextFunction, Request, Response } from 'express';

import * as userController from './userController';
import { updateRules } from '../../middleware/rules';
import fileUploadMiddleware from '../../middleware/fileUploadMiddleware';
import { InputValidationMiddleware } from '../../middleware/InputValidationMiddleware';
import { authMiddleware } from '../../middleware/AuthMiddleware';

const router = express.Router();

router.post(
  '/update',
  fileUploadMiddleware.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body, req.file, req.files);
    res.send('ok');
  },
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
  },
  // updateRules,
  // InputValidationMiddleware,
  // userController.update,
);

export default router;
