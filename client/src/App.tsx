import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Chat from './screens/Chat';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Chat} />
          <Route render={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
