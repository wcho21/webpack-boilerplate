import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const SRC_DIR = './src';
const DEST_DIR = './dist';

const config = {
  mode: 'development',

  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: path.resolve(DEST_DIR),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.html$/i,
        use: {
          loader: 'html-loader'
        }
      }, {
        test: /\.(css|sass|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(svg|jpe?g|gif|bmp|png|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/imgs/[hash][ext][query]'
        }
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(SRC_DIR, 'index.html') }),
    new CleanWebpackPlugin()
  ]
}

export default config;