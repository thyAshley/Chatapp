import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db';
import { UserAttribute } from './userTypes';

class User extends Model<UserAttribute> {
  private id?: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public gender!: string;
  public password!: string;
  public avatar!: string;
  public createdAt!: string;
  public updatedAt!: string;
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: 'User',
  },
);

export default User;
