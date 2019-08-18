import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.js';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
