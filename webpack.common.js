/*
  webpack.common.js

  Build routines shared across development & production environments

*/
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// global project variables
const { inputFolder, outputFolder } = require('./webpack.variables.js');

module.exports = {
  context: path.resolve(__dirname, inputFolder),
  entry: {
    app: './index.js',
    vendor: [
      'react', 'react-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname,  outputFolder),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2', 'react'],
          },
        },
      },
      {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.jpg$/,
        use: [
          { loader: 'url-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputFolder]),
    new HtmlWebpackPlugin({
      title: 'CryptoScanner (cached)',
      template: path.resolve(__dirname, './assets/html/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
  ],
};
