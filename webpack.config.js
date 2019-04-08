const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathToClean = ['dist']
module.exports = {
  // mode: "development",
  entry:{
    // app: ["@babel/polyfill","./src/index.js"],
    app: "./src/index.js",
    admin: './src/hello.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname: node.js里__dirname 总是指向被执行 js 文件的绝对路径所以当你在 /d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2 。
    // filename: "[name]/[hash].bundle.js",   // name是入口文件的名字作为key
    filename: "js/[name]-[hash].bundle.js",   // name是入口文件的名字作为key
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [['@babel/preset-env',{debug: true}]], //预设,包含某些es6常用插件,debug可以看到预设了那些插件
          // }
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],  // 右边到左边执行css => style
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            }
          },
          {
            loader: 'image-webpack-loader',
            // options: {
            //   bypassOnDebug: true, // webpack@1.x
            //   disable: true, // webpack@2.x and newer
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'admin',
      filename: 'admin.html',
      template: 'public/index.html',
      chunks: ["admin"]
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ["app"]
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ["app"]
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
    new CleanWebpackPlugin({pathToClean:pathToClean})
  ]
}
