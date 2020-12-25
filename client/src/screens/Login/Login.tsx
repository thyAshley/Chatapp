import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './login.scss';

import { login } from '../../redux/auth/authActions';
import loginImage from '../../assets/images/login.svg';
import { RootState } from '../../redux/rootReducer';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector<RootState>((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, [isLoggedIn, history]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div id="sections" className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="Login" />
          </div>

          <div id="form-section">
            <h2>Welcome back</h2>

            <form onSubmit={submitHandler}>
              <div className="input-field mb-1">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-field mb-2">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button>LOGIN</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
