const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: "bundle.js" },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: ['node_modules', 'src']
  },

  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },
};