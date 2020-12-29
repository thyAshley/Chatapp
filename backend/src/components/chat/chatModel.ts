import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../../db';
import User from '../user/userModel';
import { ChatAttribute } from './chatTypes';
import ChatUser from './chatUserModel';
import Message from './messageModel';

class Chat extends Model implements ChatAttribute {
  public id?: string;
  public type!: string;
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

Chat.belongsToMany(User, { through: ChatUser, foreignKey: 'chatId' });
Chat.hasMany(ChatUser, { foreignKey: 'chatId' });
Chat.hasMany(Message, { foreignKey: 'chatId' });

export default Chat;
