import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import defaultPortrait from '../../assets/images/default_portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import './Navbar.scss';

import { RootState } from '../../redux/rootReducer';
import { logout, update } from '../../redux/auth/authActions';
import Modal from '../Modal';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [gender, setGender] = useState(user?.gender);
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  const updateProfileHandler = () => {
    setShowProfileOptions(false);
    setShowProfileModal(true);
  };

  const setAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const updateUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: any = {
      firstName,
      lastName,
      gender,
    };
    const formData = new FormData();

    if (avatar) formData.append('avatar', avatar);
    for (const keys in data) {
      formData.append(keys, data[keys]);
    }
    if (password.length > 0) formData.append('password', password);
    dispatch(update(formData));
    setShowProfileModal(false);
  };

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat App</h2>
      <div id="profile-menu">
        <img
          src={
            user?.avatar
              ? `http://localhost:5000/users/${user.id}/${user.avatar}`
              : defaultPortrait
          }
          alt="Avatar"
        />
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
            <Fragment key="header">
              <h3 className="m-0">Update Profile</h3>
            </Fragment>
            <Fragment key="body">
              <form onSubmit={updateUserHandler}>
                <div className="input-field mb-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="input-field mb-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="input-field mb-1">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.currentTarget.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-field mb-1">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-field mb-1">
                  <input
                    type="file"
                    name="avatar"
                    onChange={setAvatarHandler}
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key="footer">
              <button className="btn-success" onClick={updateUserHandler}>
                UPDATE
              </button>
            </Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
