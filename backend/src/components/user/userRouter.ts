import express, { NextFunction, Request, Response } from 'express';

import * as userController from './userController';
import { updateRules } from '../../middleware/rules';
import fileUploadMiddleware from '../../middleware/fileUploadMiddleware';
import { InputValidationMiddleware } from '../../middleware/InputValidationMiddleware';
import { authMiddleware } from '../../middleware/AuthMiddleware';
import { InvalidFileType } from '../../utils/errors/errorService';

const router = express.Router();

router.post(
  '/update',
  authMiddleware,
  fileUploadMiddleware.single('avatar'),

  updateRules,
  InputValidationMiddleware,
  userController.update,
);

export default router;
