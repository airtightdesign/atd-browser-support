const path = require('path');

module.exports = {
  entry: './src/js/supports.js',
  output: {
    filename: 'atd-browser-support.js',
    path: path.resolve(__dirname, './dist/js')
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