import User from '../../src/components/user/userModel';

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}
