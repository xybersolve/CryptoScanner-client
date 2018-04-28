/*
  webpack.prod.js

  Production build routines

*/
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// shared webpack configuration
const common = require('./webpack.common.js');
// global project variables
const { inputFolder, outputFolder } = require('./webpack.variables.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
});
