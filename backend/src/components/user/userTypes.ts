import { Model } from 'sequelize';
import Chat from '../chat/chatModel';

export interface UserAttribute {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  chat?: Chat;
  gender: string;
  password: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserUpdateAttribute {
  firstName?: string;
  lastName?: string;
  gender?: string;
  password?: string;
  avatar?: string;
}
