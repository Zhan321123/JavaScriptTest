<h1 style="text-align: center">node</h1>


<hr>

### 链接

- [node官网](https://nodejs.org/zh-cn)
- [node介绍](https://nodejs.org/zh-cn/learn/getting-started/introduction-to-nodejs)
- [node api](https://nodejs.org/docs/latest/api/)
- [npm官网](https://www.npmjs.com/)
- [npm文档](https://docs.npmjs.com/)

### 封包

- 在目录下创建`package.json`文件即可打包

```json
{
  "name": "package name",
  "version": "package version",
  "description": "package description",
  "main": "main file.js",
  "author": "author name",
  "license": "license type",
  "scripts": {
    "test": "test command"
  }
}
```

<hr>

### 环境

#### npm建立独立环境

1. 先cd到对应目录文件夹，新建环境
   `npm init -y`
2. 项目环境安装一个包
   `npm i [package-name]`
3. 删除一个包
   `npm uni [package-name]`
4. 开发环境安装一个包
   `npm i [package-name] --save-dev`

#### npm管理全局环境

- 安装全局包
  `npm i [package-name] -g`

<hr>
