import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Chat from './screens/Chat';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
