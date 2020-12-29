'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Chat, { foreignKey: 'chatId' });
    }
  }
  Message.init(
    {
      chatId: DataTypes.INTEGER,
      fromUserId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      message: {
        type: DataTypes.TEXT,
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
      modelName: 'Message',
    },
  );
  return Message;
};
