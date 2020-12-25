import { UserInstance } from '../redux/types';
import instance from './instance';

export const authService = {
  login: (email: string, password: string) => {
    return instance.post('/api/v1/login', {
      email,
      password,
    });
  },

  register: (data: UserInstance) => {
    return instance.post('/api/v1/register', data);
  },

  logout: () => {},
};
