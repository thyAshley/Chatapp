import React from 'react';
import { Link } from 'react-router-dom';

import loginImage from '../../assets/images/login.svg';
import './login.scss';

const Login = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div id="sections" className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="Login" />
          </div>

          <div id="form-section">
            <h2>Welcome back</h2>

            <form>
              <div className="input-field mb-1">
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-field mb-2">
                <input type="password" placeholder="Password" />
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
