import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import User from '../user/userModel';
import Chat from './chatModel';
import { ChatUserAttribute } from './chatTypes';

class ChatUser extends Model implements ChatUserAttribute {
  public id?: string;
  chatId!: string;
  userId!: string;

  static associate() {
    this.belongsTo(User, { foreignKey: 'userId' });
    this.belongsTo(Chat, { foreignKey: 'chatId' });
  }
}

ChatUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Chats',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  },
  {
    sequelize,
    tableName: 'ChatUsers',
  },
);

export default ChatUser;
