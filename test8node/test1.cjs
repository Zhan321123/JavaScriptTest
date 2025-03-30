// 判断是否是commonjs环境
if (typeof require === 'function' && typeof module === 'object' && typeof exports === 'object') {
  console.log('commonjs')
} else {
  console.log('not commonjs')
}

// 判断是否是es环境
// if (typeof import.meta === 'object') {
//   console.log('es')
// } else {
//   console.log('not es')
// }

//
const {createServer} = require('node:https')

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  server.listen('127.0.0.1', 3000, () => {
    console.log(`Server running at http://127.0.0.1:3000/}`)
  })
});