const path = require('path');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
