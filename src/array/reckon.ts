/** @description 数组的相关计算 */

/**
 * @description 统计数组中各个元素出现的次数
 * @param {Array<number | string> } arr 数组
 * @returns {object}
 */
export const arrStaNum = (arr: Array<number | string>): object => {
  let obj: object = {};
  for (let i = 0; i < arr.length; i++) {
    let m = arr[i];
    if (obj.hasOwnProperty(m)) obj[m] += 1;
    else obj[m] = 1;
  }
  return obj
}

/**
 * @description 数组累加
 * @param {Array<number>} num 目标数组
 * @returns {number}
 */
export const arrCumsum = (arr: Array<number>): number => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}


/**
 * @description 数组平均值
 * @param {Array<number>} num 目标数组
 * @returns {number}
 */
export const arrAverage = (arr: Array<number>): number => {
  let average = arrCumsum(arr) / arr.length;
  return average
}
