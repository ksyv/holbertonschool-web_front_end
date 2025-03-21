const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './0-index.html',
      filename: '0-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './1-index.html',
      filename: '1-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './2-index.html',
      filename: '2-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './3-index.html',
      filename: '3-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './4-index.html',
      filename: '4-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './5-index.html',
      filename: '5-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './6-index.html',
      filename: '6-index.html'
    }),
    new HtmlWebpackPlugin({
      template: './7-index.html',
      filename: '7-index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};