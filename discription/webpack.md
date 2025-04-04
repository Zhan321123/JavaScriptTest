<h1 style="text-align: center">Webpack</h1>

<hr>

### webpack使用方式

1. 准备源代码
   构建`node`环境
   `npm init -y, npm i [package-name]`
   得到`package.json`文件

2. 引入css文件
   在主程序下
     ```js
     import '*.css'
     ```

3. 打包css中的资源文件（而非html中的`<img src='...'>`）,对文件做hash运算
   小于8kb的文件会压缩成base64编码，大于8kb的文件会生成一个单独的文件并导出URL地址
    ```js
    import imgX from './img.png.jpg.svg.ico...'
    const imgTag = document.createElement('img')
    imgTag.src = imgX
    documnent.querySelector('图片获取').append(imgTag)
    ```

4. 创建`/webpack.config.js`webpack的配置文件
   管理主程序入口和打包文件出口

     ```js
     const path = require('path')
     module.exports = {
       // 主程序入口
       entry: path.resolve(__dirname, './主程序入口.js'),
       // 打包文件出口
       output: {
         path: path.resolve(__dirname, '打包目录'),
         filename: '打包文件.js', // 最终输出文件为：path/打包文件.js
         clean: true // 打包前先清空dist目录
       },
       // html-webpack-plugin 插件
       plugins: [
         new HtmlWebpackPlugin({
           template: path.resolve(__dirname, '模板文件.html'),
           filename: '输出文件.html' //最终输出文件为：output.path/输出文件.html
         }),
         new MiniCssExtractPlugin() //mini-css-extract-plugin生成css文件
       ],
       // css-loader 插件
       module: {
         rules: [
           {
             test: /\.css$/,
             // use:["style-loader", "css-loader"], // style-loader将css插入到html中
             use: [MiniCssExtractPlugin.loader, "css-loader"] // mini-css-extract-plugin生成单独css文件
           },
           {
             test:/\.(png|jpg|gif|ico|svg|jepg)$/i,
             type:'asset',
             generator:{
               filename:'目录/[hash][ext][query]'
             }
           }
         ]
       },
       // css-minimizer-webpack-plugin 插件
       optimization: {
         minimizer:[
         `...`,
         new CssMinimizerPlugin(),
         ]
       }
     }
     ```

   如果没有设置主程序入口，`/src/index.js`作为主程序入口
   如果没有设置打包文件出口，得到打包文件`/dist/main.js`

5. 安装webpack到开发环境 使用开发环境包安装方式

  - `webpack` `webpack-cli`
    webpack 本体包
  - `html-webpack-plugin`
    用于自动生成html文件
  - `css-loader`
    用于处理css文件
  - `style-loader`
    用于将css文件插入到html文件中(看情况使用)
  - `mini-css-extract-plugin`
    用于将css文件为一个单独的文件而不是插入html，不与 style-loader 一起使用
  - `css-minimizer-webpack-plugin`
    用于压缩css文件

6. 在`package.json`的`scripts`中添加配置

     ```
     "scripts": {
         "build": "webpack"
     }
     ```

7. 执行打包命令
   `npm run build`
