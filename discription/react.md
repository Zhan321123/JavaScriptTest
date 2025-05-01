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

- `npm install classnames` 类名控制
- `npm install @craco/craco --save-dev` 配置路径别名
- `npm install use-immer` 将useState的修改方式像普通变量一样修改使用
- `npx install @reduxjs/toolkit react-redux` 状态管理redux
- `npm install sass --save-dev` 高级语法样式sass
- `npm install @types/react @types/react-dom --save-dev` 使用typescript
- `npm install react-router-dom` 路由管理router
- `npm install antd` 样式库antd
- `npm install electron --save-dev` 打包为桌面应用electron

### 根/package.json
```
  "scripts": {
    ... ,
    "craco-start": "craco start",
    "craco-build": "craco build"
  },
```

### 根/tsconfig.json

```json lines
{
  "compilerOptions": {
    "target": "ES6",          // 指定编译目标 ES 版本
    "module": "ES6",          // 指定模块系统（如 ES6、CommonJS）
    "lib": ["DOM", "ES6"],    // 指定需要包含的库文件
    "outDir": "./dist",       // 编译输出目录
    "rootDir": "./src",       // 源码根目录
    "moduleResolution": "NodeNext", // 启用 Node.js 现代解析策略（TypeScript 4.7+）
    "strict": false,           // 启用严格类型检查
    "esModuleInterop": true ,  // 启用 ES6 模块与 CommonJS 的互操作性
    "allowImportingTsExtensions": true, // 允许导入 .ts 文件
    "jsx": "react" // 启用 JSX
  },
  "include": ["src/**/*.ts",  "src/**/*.tsx"],  // 包含哪些文件
  "exclude": ["node_modules"],   // 排除哪些文件

}
```

### 根/craco.config.js
```

```