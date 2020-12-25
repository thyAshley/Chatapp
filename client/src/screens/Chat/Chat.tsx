import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/rootReducer';

const Chat = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <h1>Chat Screen</h1>
      <p>Welcome, {auth.user?.firstName}</p>
      <Link to="/e">Click here</Link>
    </div>
  );
};

export default Chat;
