/**
 *
 * <h3 style="text-align:center">CommonJS standard</h3>
 * <hr>
 * 导入
 * ```
 * const {成员} = require("包")
 * const 包 = require("包")
 * ```
 * 导出
 * ```
 * module.exports = {}
 * ```
 *
 * <h3 style="text-align:center">ES6 standard</h3>
 * <hr>
 *
 * 导入
 * ```
 * import {成员} from "包"
 * import 包 from "包"
 * ```
 * 导出
 * ```
 * export {成员}
 * export default 包
 * ```
 *
 */
const encoding = 'utf-8'
export const name = 'zhan'

function add(...args) {
  return args.reduce((a, b) => {
    return a + b
  })
}
export {
  add,
  encoding
}

// module.exports = {
//   add: add,
//   encoding
// }
