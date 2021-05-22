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
 * @param {number} num 目标数字
 * @returns {number}
 */
export const arrCumsum = (rest: number[]): number => {
  let sum = 0
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum
}
