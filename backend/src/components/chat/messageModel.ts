import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import Chat from './chatModel';
import { MessageAttribute } from './chatTypes';

class Message extends Model implements MessageAttribute {
  public id?: string;
  chatId!: string;
  type!: string;
  from!: string;
  message!: string;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    chatId: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
      get() {
        const type = this.getDataValue('type');
        const id = this.getDataValue('chatId');
        const content = this.getDataValue('message');
        return type === 'text'
          ? content
          : `http://localhost:5000/chats/${id}/${content}`;
      },
    },
  },
  {
    sequelize,
    tableName: 'Message',
  },
);

Message.belongsTo(Chat, { foreignKey: 'chatId' });

export default Message;
