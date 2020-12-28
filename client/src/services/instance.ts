import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authActions';
import store from '../redux/store';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }
    if (err.response.data.name !== 'undefined') {
      if (err.response.data.name === 'UnauthorizedException') {
        store.dispatch({ type: 'LOGOUT' });
        return err.response;
      }
    }
  },
);

export default instance;
