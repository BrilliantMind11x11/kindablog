import React from 'react';
import { Provider } from 'react-redux';
import reducers from '@state';
import { createStore, compose, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from "react-router";
import qs from 'qs';
import restify from 'restify';
// material ui
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
// end material ui staff
import App from '@views';
// import routes from './routes';
import aboutRoutes from './routes/about';
import homeRoutes from './routes/home'

const app = restify.createServer();

// app.use('/api', routes);


aboutRoutes.applyRoutes(app);
homeRoutes.applyRoutes(app);

app.get('/dist/*', restify.plugins.serveStatic({
  directory: './dist',
  appendRequestPath: false,
}));
app.get('/(^\/((?!api).)*$)', handleRender);

function handleRender(req, res) {
  const params = qs.parse(req.query);
  const user = { id: 1, name: 'server user' };
  const context = {};
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
  // material ui
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();
  // Create a sheetsManager instance.
  const sheetsManager = new Map();
  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    },
  });
  // Create a new class name generator.
  const generateClassName = createGenerateClassName();
  // Create a new Redux store instance
  const store = createStore(reducers, { user }, composeEnhancers);
  // Render the component to a string
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <Provider store={store}>
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>,
  );
  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client
  res.sendRaw(renderFullPage(html, css, preloadedState));
}

function renderFullPage(html, css, preloadedState = {}) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <title><%= htmlWebpackPlugin.options.title %></title>
      </head>
      <body>
        <div id="react-app">${html}</div>
        <style id="jss-server-side">${css}</style>
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
  const currentDate = Date('Y-m-d H:i:s')
  console.log(`Example app listening on port 3000! Time ${currentDate} \n`);
});
