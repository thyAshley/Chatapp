import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import defaultPortrait from '../../assets/images/default_portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import './Navbar.scss';

import { RootState } from '../../redux/rootReducer';
import { logout } from '../../redux/auth/authActions';
import Modal from '../Modal';

const Navbar = () => {
  const dispatch = useDispatch();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  const updateProfileHandler = () => {
    setShowProfileOptions(false);
    setShowProfileModal(true);
  };

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
            <p onClick={updateProfileHandler}>Update profile</p>
            <p onClick={onLogoutHandler}>Logout</p>
          </div>
        )}
        {showProfileModal && (
          <Modal click={() => setShowProfileModal(false)}>
            <Fragment key="header">Modal Header</Fragment>
            <Fragment key="body">Modal Body</Fragment>
            <Fragment key="footer">Modal Footer</Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
