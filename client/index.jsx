import React from 'react';
import ReactDOM from 'react-dom';
// import 'typeface-roboto';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { hydrate } from 'react-dom'
import reducers from '@state';
import App from '@views';
import { BrowserRouter as Router } from 'react-router-dom'


console.log('here 6');

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState, composeEnhancers);

hydrate(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#react-app'),
);
