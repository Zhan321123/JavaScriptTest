const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //约定@表示src文件夹
      'assets': path.resolve(__dirname, 'src/assets'),
    }
  }
}