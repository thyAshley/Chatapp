import multer from 'multer';
import path from 'path';

const fileType = (file: Express.Multer.File) => {
  return file.mimetype.split('/')[1];
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/users'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + `.${fileType(file)}`);
  },
});

const upload = multer({ storage: storage });

export default upload;
