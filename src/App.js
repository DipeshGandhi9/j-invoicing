import React, { Component } from 'react';
import Home from "./pages/home.page";
import Template from './pages/template.component';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './routes/authenticated.route';
import UnauthenticatedRoute from './routes/unauthenticated.route';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#367dc8',
    },
  },
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    }
  }


  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path='/' component={Template} />
              <UnauthenticatedRoute exact path='/login' component={Home} />
              <AuthenticatedRoute exact path='/home' component={Home} />
              <UnauthenticatedRoute path='*' component={() => <h2> 404 Not found </h2>} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
