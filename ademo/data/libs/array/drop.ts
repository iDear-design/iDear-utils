/**
 * ## 得到数组过滤掉左边count个后剩余元素组成的数组
 * @param {array} array 数组1
 * @param {number} count 数组2
 * @returns {any[]}
 */
export function dropLeft(array, count) {
  if (array.length === 0 || count >= array.length) return []
  count = count || 1
  return array.filter((item, index) => index >= count)
}

/**
 * ## 得到数组过滤掉右边count个后剩余元素组成的数组
 * @param {array} array 数组1
 * @param {number} count 数组2
 * @returns {any[]}
 */
export function dropRight(array, count) {
  if (array.length === 0 || count >= array.length) return []
  count = count || 1

  return array.filter((item, index) => index < array.length - count)
}
