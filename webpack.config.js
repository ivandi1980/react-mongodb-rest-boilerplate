// Imports
const PATH = require('path');
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');


// Webpack Configuration
const CONFIG = {
  // Entry
  entry: './client/src/index.jsx',
  // Output
  output: {
    path: PATH.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // Plugins
  plugins: [
    new HTMLWEBPACKPLUGIN({
      template: './client/src/index.html'
    })
  ]
};

// Exports
module.exports = CONFIG;