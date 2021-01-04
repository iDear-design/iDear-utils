/**
 * ## 是否字符串
 * @param {any} data
 * @param {String} type // String
 * @returns {boolean}
 */
function isString(data: any, type: string): boolean {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}
