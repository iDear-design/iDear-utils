/**
 * ## 判断类型
 * @param {any} data 目标值
 * @returns {string} 'String'
 */
export function protoTypeString(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}

/**
 * ## 判断类型
 * @param {any} data 目标值
 * @returns {string} '[object String]'
 */
export function protoTypeArr(data: any): string {
  return Object.prototype.toString.call(data)
}
