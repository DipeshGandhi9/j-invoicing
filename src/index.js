import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import { INITIAL_STATES } from './config/initial.state';
import App from './App';

const store = configureStore(INITIAL_STATES);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
