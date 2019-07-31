const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const version = `${require('./package.json').version}`;

module.exports = {
  entry: [
    path.join(__dirname, '/src/style/index.scss'),
    path.join(__dirname, '/src/index.ts')
  ],
  output: {
    filename: 'lac.js',
    path: path.resolve(__dirname, '../demo/layout-components/dist', version),
    library: ['MFE', 'LAC'],
    publicPath: `https://rohitrox.github.io/micro-frontend-esnext/demo/layout-components/dist/${version}/`,
    jsonpFunction: 'wpJsonpLAC'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[folder]/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "scss"]
  },
  externals: {
    // Use external version of React
    "react": "React",
    "react-dom": "ReactDOM",
    "ui-components": "MFE.LAC"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'lac.css'
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    minimize: false
  }
};
