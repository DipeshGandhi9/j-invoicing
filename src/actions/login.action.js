import * as actionTypes from '../constants/actionType';
import history from '../config/history';
import { setAuthorizationToken } from '../routes/auth';

function requestLogin() {
  return {
    type: actionTypes.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  }
}

function receiveLogin(user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  }
}

function loginError(message) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    hasError: true,
    errorMessage: message,
  }
}

function retriveAuthenticationRequest() {
  return {
    type: actionTypes.RETRIVE_AUTHENTICATION_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  }
}

function retriveAuthenticationSucess(user) {
  return {
    type: actionTypes.RETRIVE_AUTHENTICATION_SUCCESS,
    user,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  }
}

//dummy api call
export const doLogin = (creds) => {

  return dispatch => {
    dispatch(requestLogin());
    setTimeout(() => {
      if (creds && creds.uname === 'Test') {
        const user = { id_token: 1, name: "Test" };
        localStorage.setItem('id_token', user.id_token);
        dispatch(receiveLogin(user));
        history.push('/organization');
      } else {
        dispatch(loginError("Incorrect User."));
      }
    }, 2500);
  }
}

export const loadAuthentication = (redirectTo) => {

  return dispatch => {
    dispatch(retriveAuthenticationRequest());
    const idToken = localStorage.getItem('id_token');
    if (idToken != null) {
      const user = { id_token: idToken, name: "Test" };
      setAuthorizationToken(idToken);
      dispatch(retriveAuthenticationSucess(user));
      // console.log(history.location.pathname);
      // history.push(redirectTo);
      history.push("/");
    } else {
      dispatch(loginError("Incorrect User."));
      history.push('/login');
    }
  }
}
