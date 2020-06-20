import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Router, Switch, Redirect } from 'react-router-dom';
import AuthenticatedRoute from './routes/authenticated.route';
import UnauthenticatedRoute from './routes/unauthenticated.route';
import history from './config/history';
import { loadAuthentication } from './actions/login.action'
import { connect } from 'react-redux';

import Login from './pages/login.page';
import Dashboard from './pages/dashboard.page';
import Organization from './pages/organization.page';
import Customer from'./pages/customer/customer.form.page';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#367dc8',
    },
  },
});

class App extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isFetching: PropTypes.bool,

    loadAuthentication: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.props.loadAuthentication(history.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <Switch>
              <UnauthenticatedRoute exact path='/login' component={Login} />
              <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
              <AuthenticatedRoute exact path='/organization' component={Organization} />

              <AuthenticatedRoute exact path='/customer' component={Customer} />
              <AuthenticatedRoute exact path='/customer/:id' component={Customer} />

              <Redirect from='/' to='/dashboard' />
              <UnauthenticatedRoute path='*' component={() => <h2> 404 Not found </h2>} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadAuthentication: (redirectTo) => { dispatch(loadAuthentication(redirectTo)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
