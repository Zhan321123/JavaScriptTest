<h1 style="text-align: center">node</h1>

<hr>

### 链接

- [electron-doc](https://www.electronjs.org/zh/docs/latest/)

### 将react打包为.exe

- `npm install electron --save-dev`
- 配置`package.json`
  ```
  "script": {
    "electron-dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron.\"",
    "electron": "electron .",
  }
  "main": "main.js"
  ```
- 