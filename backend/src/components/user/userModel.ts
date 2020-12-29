import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../db';
import Chat from '../chat/chatModel';
import ChatUser from '../chat/chatUserModel';
import { UserAttribute } from './userTypes';
class User extends Model implements UserAttribute {
  public id?: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public gender!: string;
  public password!: string;
  public avatar!: string;
  public chat!: Chat;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    chat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Chats',
        key: 'id',
      },
      onDelete: 'cascade',
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

User.hasMany(ChatUser);

export default User;
