import { UserInstance } from '../redux/types';
import instance from './instance';

export const authService = {
  login: async (email: string, password: string) => {
    const response = await instance.post('/login', {
      email,
      password,
    });
    saveUserToLocalStorage(response.data);
    return response;
  },

  register: async (data: UserInstance) => {
    const response = await instance.post('/register', data);
    saveUserToLocalStorage(response.data);
    return response;
  },

  logout: () => {
    instance.defaults.headers['Authorization'] = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  updateProfile: async (data: any) => {
    const token = localStorage.getItem('token');
    const response = await instance.post('/user/update', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    saveUserToLocalStorage({ user: response.data });
    return response;
  },
};

const saveUserToLocalStorage = ({
  user,
  token,
}: {
  user?: UserInstance;
  token?: string;
}) => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  if (user?.password) delete user.password;
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  if (token) {
    localStorage.setItem('token', token);
  }
};
