const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, '/src/index.tsx'),
  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, '../demo')
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"]
  },
  externals: {
    // Use external version of React
    "react": "React",
    "react-dom": "ReactDOM",
    "ui-components": "UIC",
    "layout-components": "LAC"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    minimize: false
  }
};
