import React from 'react';
import { Provider } from 'react-redux';
import App from '../client/containers/index.jsx';
import reducers from '../client/state';

import { createStore, compose, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server';

const qs = require('qs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

app.use('/dist', express.static('dist'));

app.use(handleRender);

function handleRender(req, res) {
  const params = qs.parse(req.query);
  const user = { id: 1, name: 'server user' };


  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

  // Create a new Redux store instance
  const store = createStore(reducers, { user }, composeEnhancers);
  console.log(user);
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState = {}) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <title>SomeTitle</title>
      </head>
      <body>
        <div id="react-app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./dist/vendors~app.bundle.js"></script>
        <script src="./dist/app.bundle.js"></script>
      </body>
    </html>
  `;
}

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
