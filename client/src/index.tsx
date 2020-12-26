import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faEllipsisV,
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons';

import './index.css';
import App from './App';
import store from '../src/redux/store';

library.add(
  faSmile,
  faImage,
  faSpinner,
  faEllipsisV,
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
