import { combineReducers } from 'redux'
import auth from './auth.reducer'
import logoutReducer from './logout.reducer';

const rootReducer = combineReducers({
    auth,
    logoutReducer
});

export default rootReducer;