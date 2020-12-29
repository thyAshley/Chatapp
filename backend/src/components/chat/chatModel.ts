import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../../db';
import User from '../user/userModel';
import { ChatAttribute } from './chatTypes';
import ChatUser from './chatUserModel';
import Message from './messageModel';

class Chat extends Model implements ChatAttribute {
  public id?: string;
  public type!: string;

  static associate() {
    this.belongsToMany(User, { through: ChatUser, foreignKey: 'chatId' });
    this.hasMany(ChatUser, { foreignKey: 'chatId' });
    this.hasMany(Message, { foreignKey: 'chatId' });
  }
}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'Chats',
  },
);

export default Chat;
