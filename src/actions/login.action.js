import * as actionTypes from '../constants/actionType';
import history from '../config/history';

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

//dummy api call
export const doLogin = (creds) => {

  return dispatch => {
    dispatch(requestLogin());
    setTimeout(() => {
      if (creds && creds.uname === 'Test') {
        dispatch(receiveLogin({ id_token: 1, name: "Test" }));
        history.push('/dashboard');
      } else {
        dispatch(loginError("Incorrect User."));
      }
    }, 2500);
  }
}

