/** @desc 数组的相关查找 */

/**
 * @desc 返回数组第一个索引值
 * @param arr 数组
 * @param val 值
 * @returns {number}
 */
export const arrIndexOf = (arr: Array<any>, val: any): number => {
  if (arr.indexOf) {
    return arr.indexOf(val)
  }
  for (let index = 0, len = arr.length; index < len; index++) {
    if (val === arr[index]) {
      return index
    }
  }
}

/**
 * @desc 从最后开始的索引值,返回数组第一个索引值
 * @param list 数组
 * @param val 值
 */
export const arrLastIndexOf = (arr: Array<any>, val: any): number => {
  if (arr.lastIndexOf) {
    return arr.lastIndexOf(val)
  }
  for (let len = arr.length - 1; len >= 0; len--) {
    if (val === arr[len]) {
      return len
    }
  }
  return -1
}
