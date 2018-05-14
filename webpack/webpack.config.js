const path = require('path');

const plugins = require('./webpackPlugins');

const SRC_DIR = path.join(__dirname, '../client');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  entry: [`${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/client/dist',
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
