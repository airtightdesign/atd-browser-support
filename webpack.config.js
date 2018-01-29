const path = require('path');

module.exports = {
  entry: {
      'atd-browser-support': path.resolve(__dirname, './src/js/supports.js'), 
      'deprecated-polyfills': path.resolve(__dirname, './src/js/deprecated-polyfills.js'), 
      'legacy-polyfills': path.resolve(__dirname, './src/js/legacy-polyfills.js')
    },
  output: {
    filename: '[name].js',
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