import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './register.scss';

import registerImage from '../../assets/images/register.svg';
import { register } from '../../redux/auth/authActions';
import { RootState } from '../../redux/rootReducer';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, [isLoggedIn, history]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      register({
        firstName,
        lastName,
        email,
        gender,
        password,
      }),
    );
  };
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div id="sections" className="card-shadow">
          <div id="image-section">
            <img src={registerImage} alt="Register" />
          </div>

          <div id="form-section">
            <h2>Create an account</h2>

            <form onSubmit={submitHandler}>
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
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <button>Register</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
