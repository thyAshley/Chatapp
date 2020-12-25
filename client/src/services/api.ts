import instance from './instance';

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await instance.post('/api/v1/login', {
        email,
        password,
      });
      instance.defaults.headers[
        'Authorization'
      ] = `Bearer ${response.data.token}`;
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  },

  register: (data: any) => {
    return instance.post('/api/v1/register', data);
  },

  logout: () => {},
};
