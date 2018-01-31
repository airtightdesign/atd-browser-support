const path = require('path');

module.exports = {
  entry: {
      'atd-browser-support': path.resolve(__dirname, './src/js/supports.js')
    },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/js'),
    library: 'Supports',
    libraryTarget: 'commonjs-module'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['env']
              }
          }
      ]
  }
};