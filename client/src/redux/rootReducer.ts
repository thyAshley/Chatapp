import { combineReducers } from 'redux';

import AuthReducer from './auth/authReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
