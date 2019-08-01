const path = require('path');

const version = `${require('./package.json').version}`;

module.exports = {
  entry: [
    path.join(__dirname, 'index.ts')
  ],
  output: {
    filename: 'glb.js',
    path: path.resolve(__dirname, '../demo/global-vendors/dist', version),
    library: ['MFE', 'GLB'],
    publicPath: `https://rohitrox.github.io/micro-frontend-esnext/demo/global-vendors/dist/${version}/`,
    jsonpFunction: 'wpJsonpGLB'
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
    extensions: [".tsx", ".ts", ".js"]
  },
  optimization: {
    moduleIds: 'hashed',
    minimize: false
  }
};
