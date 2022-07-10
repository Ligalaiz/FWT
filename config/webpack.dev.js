const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { join } = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString();
const pkg = require('../package.json');

const root = join(__dirname, '../');
const src = join(root, 'src');

module.exports = merge(common, {
  mode: 'development',
  name: 'client',
  devtool: 'inline-source-map',

  output: {
    path: join(root, 'dist'),
    filename: '[name].[contenthash:10].js',
    chunkFilename: '[name].[contenthash:10].js',
    assetModuleFilename: 'assets/[name].[contenthash:10][ext]',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gif|png|jpe?g|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[contenthash:10][ext]',
        },
      },
    ],
  },
  devServer: {
    hot: true,
    open: '/',
    port: 3000,
    historyApiFallback: true,
  },

  // plugins: [new BundleAnalyzerPlugin()],

  plugins: [
    new MiniCssExtractPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join(root, 'public/index.ejs'),
      templateParameters: {
        title: 'FWT',
        buildTime: `Build at: ${new Date().toISOString()}`,
        commitHash: `Commit hash: ${commitHash}`,
        version: `App version ${JSON.stringify(pkg.version)}`,
      },
      favicon: join(src, 'assets/img', 'favicon.png'),
    }),
  ],

  stats: {
    errorDetails: true,
  },
});
