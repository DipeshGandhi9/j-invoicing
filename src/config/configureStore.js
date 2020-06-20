import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root.reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// enable Redux Dev Tools
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancers);
}