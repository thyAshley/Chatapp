import { Model } from 'sequelize';

export interface UserAttribute {
  id?: string;
  name: string;
  email: string;
  gender: string;
  password: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInstance extends Model<UserAttribute> {}
