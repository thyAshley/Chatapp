import { Request, Response, NextFunction } from 'express';

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  res.send({ email, password });
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  res.send('ok');
};
