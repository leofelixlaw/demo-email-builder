const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');
const fs = require('fs');
const name = pkg.name;
let plugins = [];

module.exports = (env = {}) => {
  if (env.production) {
    plugins = [
      new webpack.optimize.UglifyJsPlugin({ minimize: true, compressor: { warnings: false }}),
      new webpack.BannerPlugin(`${name} - ${pkg.version}`),
    ]
  } else {
    const index = 'index.html';
    const indexDev = '_' + index;
    plugins.push(new HtmlWebpackPlugin({
      template: fs.existsSync(indexDev) ? indexDev : index
    }));
  }

  return {
    entry: './index.js',
    output: {
        filename: `./dist/${name}.min.js`,
        library: 'grapesjs-mjml', // name,
        libraryTarget: 'umd',
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }],
    },
    externals: { 'grapesjs': 'grapesjs' },
    plugins: plugins,
  };
}
