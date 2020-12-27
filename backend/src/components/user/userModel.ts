import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db';
import { UserAttribute } from './userTypes';
class User extends Model<UserAttribute> {
  public id?: string;
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
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
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
    tableName: 'Users',
  },
);

export default User;
