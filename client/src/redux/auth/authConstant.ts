import { UserInstance, ErrorInstance } from '../types';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_REQUEST = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';
export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export interface AuthInstance {
  user: UserInstance | null;
  token: string;
  isLoggedIn: boolean;
  error: ErrorInstance | null;
  loading: boolean;
}

interface LogoutAction {
  type: typeof LOGOUT;
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

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}
interface RegisterSuccesssAction {
  type: typeof REGISTER_SUCCESS;
  payload: {
    user: UserInstance;
    token: string;
  };
}
interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: ErrorInstance;
}

interface UpdateRequestAction {
  type: typeof UPDATE_REQUEST;
}
interface UpdateSuccessAction {
  type: typeof UPDATE_SUCCESS;
  payload: UserInstance;
}
interface UpdateFailureAction {
  type: typeof UPDATE_FAILURE;
  payload: ErrorInstance;
}

export type authActionType =
  | LoginAction
  | RegisterRequestAction
  | RegisterSuccesssAction
  | RegisterFailureAction
  | LoginFailAction
  | LogoutAction
  | UpdateRequestAction
  | UpdateSuccessAction
  | UpdateFailureAction;
