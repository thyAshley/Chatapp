import { Model } from 'sequelize';

export interface UserAttribute {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
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
