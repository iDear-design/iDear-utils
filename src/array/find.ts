/** @description 数组的相关查找 */

/**
 * @description 返回数组第一个索引值
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
 * @description 从最后开始的索引值,返回数组第一个索引值
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

/**
 * @description 数组元素最大值|最小值
 * @param {Array<number>} arr---目标数组
 * @param {string} type---最大：max、最小: min
 * @param val 值
 */
export const arrFindMaxOrMin = (arr: Array<number>, type: string = 'max'): number => {
  return Math[type].apply(null, arr);
}

/**
 * @description 获取数组内指定值出现的次数
 * @param {Array<number | string>} arr---目标数组
 * @param {string} type---最大：max、最小: min
 * @param val 值
 */
export const arrCount = (arr: Array<number | string>, value: number | string): number => {
  let count: number = 0
  for (let len = arr.length - 1; len >= 0; len--) {
    if (value === arr[len]) count + 1
  }
  return count
}
