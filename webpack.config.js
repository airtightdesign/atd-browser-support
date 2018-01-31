const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
  },
  plugins: [
    new CopyWebpackPlugin([
        { 
            from: './node_modules/atd-legacy-polyfills/dist/js/atd-legacy-polyfills.js',
            to: 'atd-legacy-polyfills.js',
            copyUnmodified: true
        },
        { 
            from: './node_modules/atd-deprecated-polyfills/dist/js/atd-deprecated-polyfills.js',
            to: 'atd-deprecated-polyfills.js',
            copyUnmodified: true
        }
    ])
  ]
};