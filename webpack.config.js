var path = require('path');
var webpack = require('webpack');
var admin_components_dir = path.join(__dirname, 'src/component');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './page/src/main.js',

  output: {
     path:'./',
     filename: 'index.js',
  },

  devServer: {
     inline: true,
     port: 88
  },
  resolve: {
         extensions: ['', '.js', '.jsx'], //后缀名自动补全
     },
  module: {
     loaders: [ {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
           presets: ['es2015', 'react']
        }
     },
     {
       test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
       },
     {
         //文件加载器，处理文件静态资源
         test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'file-loader?name=./fonts/[name].[ext]'
     },
     {
       //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
       //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
       test: /\.html$/,
       loader: "html?attrs=img:src img:data-src"
     },
     {
     //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
         //如下配置，将小于8192byte的图片转成base64码
         test: /\.(png|jpg|gif)$/,
         loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      },
      {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
            }
   ]
 },plugins: [
   new webpack.HotModuleReplacementPlugin(),//热加载
   new ExtractTextPlugin('style/[name].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
 ]

}

module.exports = config;
