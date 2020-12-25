import { body } from 'express-validator';

export const RegisterRules = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First Name should not be empty'),
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last Name should not be empty'),
  body('password')
    .notEmpty()
    .withMessage('Password should not be empty')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Password should at least be 5 character long'),
  body('gender').notEmpty().withMessage('Gender should not be empty'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email should not be empty')
    .bail()
    .isEmail()
    .withMessage('Please provide a valid email'),
];

export const LoginRules = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email should not be empty')
    .bail()
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password should not be empty'),
];
