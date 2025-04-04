const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type','text/plain;charset=utf-8')
//   res.statusCode = 200
//   res.end('Hello, 你好')
// })
// server.listen(3000, () => {
//   console.log('server is running at http://localhost:3000')
// })

const server = http.createServer();
server.on('request', (req, res) => {
  console.log("url: ",req.url)
  console.log("headers.host: ",req.headers.host)
  console.log("method: ",req.method)

  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.statusCode = 200
  res.end("<!doctype html><html lang=\"zh\"><head><meta charset=\"UTF-8\">" +
    "<meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
    "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Document</title></head><body>" +
    "<div>hello</div>\n" +
    "</body></html>")
}).listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})