const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.jsx',
  },
  plugins: [
   new CleanWebpackPlugin(['dist']),
   new HtmlWebpackPlugin({
     title: 'React webpack starter common',
     template: './public/index.html'
   })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};
