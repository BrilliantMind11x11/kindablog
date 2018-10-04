const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
   },
  plugins: [
   new HtmlWebpackPlugin({
     title: 'React webpack starter'
   })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: "development"
};
