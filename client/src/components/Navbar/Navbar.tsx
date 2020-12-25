import React from 'react';
import { useSelector } from 'react-redux';

import './Navbar.scss';
import { RootState } from '../../redux/rootReducer';

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat App</h2>
      <div id="profile-menu">
        <img src="" alt="Avatar" />
        <p>{user?.firstName}</p>
      </div>
    </div>
  );
};

export default Navbar;
