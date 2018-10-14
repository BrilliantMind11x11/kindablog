const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@state': path.resolve(__dirname, 'client/state/'),
      '@views': path.resolve(__dirname, 'client/views/')
    },
    extensions: ['.js', '.jsx'],
  },
  externals: [webpackNodeExternals()],
  watchOptions: {
    poll: 1000
  }
};
