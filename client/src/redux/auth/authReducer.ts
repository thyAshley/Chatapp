import {
  AuthInstance,
  authActionType,
  LOGIN,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from './authConstant';

const localUser = localStorage.getItem('user');
const localToken = localStorage.getItem('token');
const initialState: AuthInstance = {
  user: localUser ? JSON.parse(localUser) : null,
  token: localToken ? localToken : '',
  isLoggedIn: !!localUser,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: authActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        error: null,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isLoggedIn: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
