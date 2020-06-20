import * as actionTypes from '../constants/actionType';

const initialState = {
    user: {},
    isAuthenticated: false,
    isFetching: false,
    id_token: '',
}

const auth = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LOGIN_REQUEST: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.user,
                id_token: action.id_token,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            }
        }

        case actionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                error: action.errorMessage,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            }
        }

        case actionTypes.RETRIVE_AUTHENTICATION_REQUEST: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case actionTypes.RETRIVE_AUTHENTICATION_SUCCESS: {
            return {
                ...state,
                user: action.user,
                id_token: action.id_token,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            }
        }

        case actionTypes.LOGOUT_REQUEST: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case actionTypes.LOGOUT_SUCCESS: {
            return {
                ...state,
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: null,
                id_token: null,
            }
        }

        case actionTypes.LOGOUT_FAILURE: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        default:
            return state;
    }

}

export default auth;