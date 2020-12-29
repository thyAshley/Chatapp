import { Op } from 'sequelize';
import { Request, Response, NextFunction } from 'express';

import User from '../user/userModel';
import Chat from './chatModel';
import Message from './messageModel';

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await User.findOne({
    where: { id: req.user.id },
    include: [
      {
        model: Chat,
        include: [
          {
            model: User,
            where: {
              [Op.not]: {
                id: req.user.id,
              },
            },
          },
          {
            model: Message,
            limit: 20,
            order: [['id', 'desc']],
          },
        ],
      },
    ],
  });
  return res.send(user?.chat);
};
