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
      template: './src/0-index.html' 
    })
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