const port = require('./test3export')
const {join} = require('path');

path = join(__dirname, './file/text.txt');
console.log(port.encoding)
console.log(port.add(1, 2, 3, 4, 5))
console.log(port.name)
