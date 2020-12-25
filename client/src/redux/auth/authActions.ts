import { Dispatch } from 'redux';

import * as authConstant from './authConstant';
import { authService } from '../../services/api';

export const login = (email: string, password: string) => async (
  dispatch: Dispatch,
) => {
  try {
    const response = await authService.login(email, password);
    dispatch({ type: authConstant.LOGIN, payload: response?.data });
  } catch (error) {
    dispatch({
      type: authConstant.LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
