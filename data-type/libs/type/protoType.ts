/**
 * ## 是否字符串
 * @param {any} data 目标值
 * @returns {boolean}
 */
export function protoTypeString(data: any): string {
  // Object.prototype.toString.call(o).slice(8, -1) === 'String'
  return Object.prototype.toString.call(data).slice(8, -1)
}

/**
 * ## 是否字符串
 * @param {any} data 目标值
 * @returns {boolean}
 */
export function protoTypeArr(data: any): string {
  // Object.prototype.toString.call(str) === '[object String]'
  return Object.prototype.toString.call(data)
}
