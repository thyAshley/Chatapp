import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultPortrait from '../../assets/images/default_portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.scss';
import { RootState } from '../../redux/rootReducer';
const Navbar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat App</h2>
      <div id="profile-menu">
        <img src={user?.avatar || defaultPortrait} alt="Avatar" />
        <p>{user?.firstName}</p>
        <FontAwesomeIcon
          icon="caret-down"
          className="fa-icon"
          onClick={() => setShowProfileOptions(!showProfileOptions)}
        />
        {showProfileOptions && (
          <div id="profile-options">
            <p>Update profile</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
