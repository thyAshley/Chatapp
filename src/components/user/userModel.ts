import { DataTypes } from 'sequelize';
import { sequelize } from '../../db';
import { UserInstance } from './userTypes';

const User = sequelize.define<UserInstance>('User', {
  name: {
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
});

export default User;
