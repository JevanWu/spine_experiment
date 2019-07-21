'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: "./src/index.js",
    searchPage: "./src/search.js",
    pixi: "./src/pixi.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js/, use: 'babel-loader'},
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      PIXI: 'pixi.js'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  mode: 'development'
}
