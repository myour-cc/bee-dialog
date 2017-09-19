const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    dialog: './app/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          "postcss-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          "postcss-loader",
          'stylus-loader'
        ]
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: 'image/[hash].[ext]'
          }
        }]
      },
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader'
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin(`
        Author  :   DasonCheng
        Email   :   dasoncheng@outlook.com
        Site    :   myour.cc
      `)
  ]
};
