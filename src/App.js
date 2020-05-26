import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Router, Switch, Redirect } from 'react-router-dom';
import AuthenticatedRoute from './routes/authenticated.route';
import UnauthenticatedRoute from './routes/unauthenticated.route';
import { setAuthorizationToken } from './routes/auth';
import history from './config/history';

import Login from './pages/login.page';
import Dashboard from './pages/dashboard.page';
import Company from './pages/company.page';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#367dc8',
    },
  },
});

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    setAuthorizationToken(token);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <Switch>
              <UnauthenticatedRoute exact path='/login' component={Login} />
              <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
              <AuthenticatedRoute exact path='/company' component={Company} />
              <Redirect from='/' to='/dashboard' />
              <UnauthenticatedRoute path='*' component={() => <h2> 404 Not found </h2>} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
