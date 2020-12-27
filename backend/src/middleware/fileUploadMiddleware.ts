import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';

import { InvalidFileType } from '../utils/errors/errorService';

const fileType = (file: Express.Multer.File) => {
  return file.mimetype.split('/')[1];
};

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const allowedTypes = ['jpg', 'jpeg', 'png'];
  if (allowedTypes.includes(fileType(file))) {
    cb(null, true);
  } else {
    cb(new InvalidFileType('File provided must be of type jpg/jpeg/png'));
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const avatarDir = path.join(__dirname, `../public/users/${req.user.id}`);
    if (!fs.existsSync(avatarDir)) {
      fs.mkdirSync(avatarDir);
    } else {
      const files = fs.readdirSync(avatarDir);
      for (const file of files) {
        fs.unlinkSync(path.join(avatarDir, file));
      }
    }
    cb(null, avatarDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + `.${fileType(file)}`);
  },
});

const fileUploadMiddleware = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default fileUploadMiddleware;
