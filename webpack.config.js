const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader' }]
  },
  plugins: [new UglifyJSPlugin()]
};
