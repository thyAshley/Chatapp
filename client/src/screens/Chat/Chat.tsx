import React from 'react';
import { useSelector } from 'react-redux';

import './chat.scss';

import { RootState } from '../../redux/rootReducer';
import Navbar from '../../components/Navbar';

const Chat = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrapper">Data</div>
    </div>
  );
};

export default Chat;
