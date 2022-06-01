const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
   mode:'development',
   entry: {
      main:'./src/script/script.js',
      // children: './src/script/slick.min.js',
      // jquery: 'https://code.jquery.com/jquery-3.4.1.min.js',
   },
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname,'dist')
   },
   plugins: [
      new HTMLWebpackPlugin({
         template:'./src/index.html'
      }),
      new CleanWebpackPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader','css-loader']
         },
         {
            test: /\.(png|svg|jpg|gif)/,
            use: ['file-loader']
         },
         {
            test: /\.(eot|ttf|woff|woff2)/,
            use: [
               {
               loader: 'file-loader?name=./src/fonts/Graphik-Bold.ttf'
            },
         ]
         }
      ]
   }
}