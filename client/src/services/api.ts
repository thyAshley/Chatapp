import { UserInstance } from '../redux/types';
import instance from './instance';

export const authService = {
  login: async (email: string, password: string) => {
    const response = await instance.post('/api/v1/login', {
      email,
      password,
    });
    saveUserToLocalStorage(response.data);
    return response;
  },

  register: async (data: UserInstance) => {
    const response = await instance.post('/api/v1/register', data);
    saveUserToLocalStorage(response.data);
    return response;
  },

  logout: () => {
    instance.defaults.headers['Authorization'] = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },
};

const saveUserToLocalStorage = ({
  user,
  token,
}: {
  user: UserInstance;
  token: string;
}) => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};
