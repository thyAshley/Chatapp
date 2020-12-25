import {
  AuthInstance,
  authActionType,
  LOGIN,
  LOGIN_FAIL,
} from './authConstant';

const initialState: AuthInstance = {
  user: null,
  token: '',
  isLoggedIn: false,
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
    default:
      return state;
  }
};

export default authReducer;
