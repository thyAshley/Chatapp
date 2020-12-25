import { UserInstance, ErrorInstance } from '../types';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';

export interface AuthInstance {
  user: UserInstance | null;
  token: string;
  isLoggedIn: boolean;
  error: ErrorInstance | null;
  loading: boolean;
}

interface LoginAction {
  type: typeof LOGIN;
}
interface LoginAction {
  type: typeof LOGIN;
  payload: {
    user: UserInstance;
    token: string;
  };
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  payload: ErrorInstance;
}

interface RegisterAction {
  type: typeof REGISTER;
  payload: {};
}

export type authActionType = LoginAction | RegisterAction | LoginFailAction;
