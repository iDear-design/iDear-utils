/** @desc 数组的相关计算 */

/**
 * @desc 统计数组中各个元素出现的次数
 * @param {Array<number> | Array<string> } arr 数组
 * @returns {object}
 */
export const arrStaNum = (arr: Array<number> | Array<string>): object => {
  let obj: object = {};
  for (let i = 0; i < arr.length; i++) {
    let m = arr[i];
    if (obj.hasOwnProperty(m)) obj[m] += 1;
    else obj[m] = 1;
  }
  return obj
}
