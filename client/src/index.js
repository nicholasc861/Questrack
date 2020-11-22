import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import GlobalStyle from './components/globalStyles'
import PrivateRoute from './PrivateRoute'
import NavigationBar from './components/NavigationBar'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

const App = () => {
  return(
      <Router>
        <GlobalStyle />
          <NavigationBar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
      </Router>
  )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
