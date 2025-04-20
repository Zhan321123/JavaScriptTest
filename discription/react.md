<h1 style="text-align: center;">React</h1>

<hr>

### 链接

- [react中文文档](https://zh-hans.react.dev/)
- [babel](https://babeljs.io/)

### 开始

- 项目根目录下运行 
  `npx create-react-app [appName]`
- `cd [appName]` `npm start` 
  等待收到compiled successfully、浏览器localhost:3000打开即为成功
- 在`package.json`中添加`"homepage": ".",`
  用于配置部署时的环境变量，即执行`npm build`之后可以正常运行`build/index.html`

### 项目结构
> - [appName]
>  - src // 项目源文件
>    - index.js // 项目入口文件
>    - assets // 静态资源
>    - apis // 接口文件
>    - components // 通用组件
>    - pages // 页面级组件
>    - router // 路由配置文件
>    - store // 状态管理文件
>    - utils // 工具函数

### 重要库配置

- `npm install react-router-dom` 路由管理router
- `npm install sass --save-dev` 高级语法样式sass
- `npx install @reduxjs/toolkit react-redux` 状态管理redux
- `npm install antd` 样式库antd
- `npm install electron --save-dev` 打包为桌面应用electron
- `npm install immer` 将useState的修改方式像普通变量一样修改使用

###