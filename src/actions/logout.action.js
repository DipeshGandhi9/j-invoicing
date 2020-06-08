import { LOGOUT_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionType';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}