import React from 'react';

import './chat.scss';

import Navbar from '../../components/Navbar';

const Chat = () => {
  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrapper">Data</div>
    </div>
  );
};

export default Chat;
