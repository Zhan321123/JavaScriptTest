const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/js/login.js'),
  output: {
    path: path.resolve(__dirname, './dist/zhan'),
    filename: './output.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/login.html'),
      filename: './output.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif|ico|svg|jepg)$/i,
        type:'asset',
        generator:{
          filename:'images/[hash][ext][query]'
        }
      },
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin()
    ]
  }
}