import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../constants/actionType';

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
export const logoutUser = () => {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}