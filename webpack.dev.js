/*
  webpack.dev.js

  Development only build routines 
*/
const merge = require('webpack-merge');

// shared webpack configuration
const common = require('./webpack.common.js');
// global project variables
const { inputFolder, outputFolder } = require('./webpack.variables.js');

module.exports = merge(common, {
  devServer: {
    contentBase: outputFolder
  }
});