/*
  webpack.config.js 

  Composite build routines for all environments (test builds)
  * lab test case
*/
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const outputFolder = 'dist';
exports.outputFolder = outputFolder;

module.exports = env => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: './index.js',
      vendor: [
        'react', 'react-dom'
      ]
    },  
    output: {
      path: path.resolve(__dirname,  outputFolder),
      filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
     contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["env", "stage-2"]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader"}
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {loader: "url-loader"}
          ]
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin([outputFolder]),
      new UglifyJsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.bundle.js"
      }),
      new webpack.HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      })
    ]
    ]
  };
};

/* es-lint for webpack.dev.js

module: {
  rules: [
    {
      enforce: "pre",
      test:/\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
      options: {
        formatter: require("eslint/lib/formatters/stylish")
      }
    }
  ]
},
*/