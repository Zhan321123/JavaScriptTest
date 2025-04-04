/**
 * fs module test
 *
 */

const fs = require('fs')
const path = require("path");

console.log(__dirname) //D:\code\JavaScriptProject\JavaScriptTest\test8node
console.log(__filename) //D:\code\JavaScriptProject\JavaScriptTest\test8node\test1.js

fs.writeFile(path.join(__dirname, './file/text.txt'), '123\nhello\n你好', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功')
  }
})

fs.readFile(path.join(__dirname, './file/text.txt'), 'utf-8', (err, data) => {
  if (err) {
    console.log('读取失败')
    console.log(err)
  } else {
    console.log('读取成功')
    console.log(data)
  }
})
