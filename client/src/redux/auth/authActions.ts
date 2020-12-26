import { Dispatch } from 'redux';

import * as authConstant from './authConstant';
import { authService } from '../../services/api';
import { UserInstance } from '../types';

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

export const register = (data: UserInstance) => async (dispatch: Dispatch) => {
  dispatch({ type: authConstant.REGISTER_REQUEST });
  try {
    const response = await authService.register(data);
    console.log(response.data);
    dispatch({ type: authConstant.REGISTER_SUCCESS, payload: response?.data });
  } catch (error) {
    dispatch({
      type: authConstant.REGISTER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: authConstant.LOGOUT });
};
