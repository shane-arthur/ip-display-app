/* eslint no-undef : 0, no-underscore-dangle: 0*/

import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import createRoutes from './routes/index';

let state = {};

if (window.__REDUX_STATE__) {
  try {
    state = JSON.parse(unescape(__REDUX_STATE__));
  } // eslint-disable-line brace-style
  catch (e) {
    console.log('error');
  }
}

const store = configureStore(state);

ReactDOM.render(( // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store} radiumConfig={{ userAgent: navigator.userAgent }}>
    <StyleRoot>
      {createRoutes(browserHistory)}
    </StyleRoot>
  </Provider>), document.getElementById('main'));

