import User from '../user/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateToken = async (id: string) => {
  return await jwt.sign({ id: id }, process.env.JWT_SECRET!, {
    expiresIn: 5,
  });
};

export const hashPassword = async (password: string | number) => {
  if (typeof password === 'number') {
    password = password.toString();
  }
  return await bcrypt.hash(password, 10);
};

export const findUser = async (email: string) => {
  return await User.findOne({ where: { email: email } });
};

export const createUser = async (
  firstName: string,
  lastName: string,
  password: string | number,
  email: string,
  gender: string,
) => {
  const hashed = await hashPassword(password);
  return await User.create({
    firstName: firstName,
    lastName: lastName,
    password: hashed,
    email: email,
    gender: gender,
  });
};
