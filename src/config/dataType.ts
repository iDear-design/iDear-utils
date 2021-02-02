/**
 * @desc 判断类型
 * @param {any} data 目标值
 * @returns {string} 'String'
 */
export function dataTypeString(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}

/**
 * @desc 判断类型
 * @param {any} data 目标值
 * @returns {string} '[object String]'
 */
export function dataTypeArr(data: any): string {
  return Object.prototype.toString.call(data)
}
