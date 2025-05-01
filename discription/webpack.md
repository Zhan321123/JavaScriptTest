<h1 style="text-align: center">Webpack</h1>

<hr>

### 链接

- [webpack主页](https://www.webpackjs.com/)
- [webpack官方文档](https://www.webpackjs.com/concepts/)

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
       // source-map 源码映射，开启后可以在浏览器中看到源码，常用于 debug
       devtool: process.env.NODE_ENV === 'develop' ? 'inline-source-map' : false,
       // 主程序入口
       // entry: path.resolve(__dirname, './主程序入口.js'), //单个html文件时
       entry: { //多个html文件时
         "login": path.resolve(__dirname, './主程序入口.js'),
         "content": path.resolve(__dirname, './主程序入口.js')
       },
       // 打包文件出口
       output: {
         path: path.resolve(__dirname, '打包目录'),
         filename: './[name]/打包文件.js', // 最终输出文件为：path/打包文件.js
         clean: true // 打包前先清空dist目录
       },
       // html-webpack-plugin 插件
       plugins: [
         new HtmlWebpackPlugin({
           template: path.resolve(__dirname, '模板文件.html'),
           filename: '输出文件.html', //最终输出文件为：output.path/输出文件.html
           chunks: ['login'] // 引入的js文件，与 entry 的 key 一致
         }),
         new HtmlWebpackPlugin({ // 多个html文件时，配置多个HtmlWebpackPlugin
           template: path.resolve(__dirname, '模板文件.html'),
           filename: '输出文件.html', //最终输出文件为：output.path/输出文件.html
           chunks: ['content']
         }),
         new MiniCssExtractPlugin({
           filename:'./[name]/打包文件.css'
         }), //mini-css-extract-plugin生成css文件
         new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
         })
       ],
       // css-loader 插件
       module: {
         rules: [
           {
             test: /\.css$/,
             // use:["style-loader", "css-loader"], // style-loader将css插入到html中
             // mini-css-extract-plugin生成单独css文件
             use: [process.env.NODE_ENV = 'develop' ? 'style-loader' : 
              MiniCssExtractPlugin.loader, "css-loader"] 
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
         ],
         splitChunks: {
           chunks: 'all', //所有模块动态非动态移入的都分割分析
           cacheGroups: { //分割组
             commons: { //抽取公共模块
               minSize: 0, // 最小的chunk的最小大小bytes
               minChunks: 2, // 最少被引用的次数
               reuseExistingChunk: true, //当chunk包含从主bundle中拆分出的模块，则复用该chunk
               name(module, chunks, cacheGroupKey){ //分离模块文件名
                 const allChunksNames = chunks.map((item) => item.name).join('~') //模块名1~模块名2
                 return `./目录/${allChunksNames}` //输出目录
               }
             }
           }
         }
       },
       // resolve解析别名配置，用于 import 不同路径相同文件名的文件
       resolve: {
         alias:{
          '@': path.resolve(__dirname, './主目录文件夹')
         }
       }
     }
     ```

   <fieldset>
   如果没有设置主程序入口，`/src/index.ts`作为主程序入口
   如果没有设置打包文件出口，得到打包文件`/dist/main.js`
   </fieldset>

5. 安装webpack到开发环境 使用开发环境包安装方式

   - `webpack` `webpack-cli`
     webpack 本体包
   - `html-webpack-plugin`
     用于自动生成html文件
   - `css-loader`
     用于处理css文件
   - `style-loader`
     用于将css文件插入到html文件中
   - `mini-css-extract-plugin`
     用于将css文件为一个单独的文件而不是插入html，不与 style-loader 一起使用
   - `css-minimizer-webpack-plugin`
     用于压缩css文件
   - `webpack-dev-server`
     用于启动一个本地服务器，自动打开浏览器并自动刷新页面
   - `cross-env`
     用于解决不同操作系统下命令行参数的差异
   - `define-plugin`
     用于在前端注入环境环境变量，比如让`console.log = () => {}`

6. 在`package.json`的`scripts`中添加配置

   ```
    "scripts": {
      "build": "cross-env NODE_ENV=production webpack --mode=production", // 生产环境
      "dev": "cross-env NODE_ENV=development webpack serve --open --mode=development" // 开发环境
    }
   ```
   
   cross-env注入环境变量
   用法：cross-env 变量名=值

7. 注入前端环境变量

   让log失效，在入口js开头写入

   ```js
   if (process.env.NODE_ENV === 'production'){
     console.log = () => {}
   }
   ```

8. 别名配置
   让import不同路径相同文件名的文件
   `import '@/*.js'`就可以，其中@ = 上面的resolve配置项

9. 执行打包命令，同上的`"scripts":{}`中的配置

   `npm run build` 生产环境打包命令
   `npm run dev` 开发环境打包命令
