/** @desc 数字的加减乘法等计算 */

/**
 * @desc 阶乘
 * @param {number} num 目标数字
 * @returns {number}
 */
export const factorial = (num: number): number => {
  let count = 1
  for (let i = 1; i <= num; i++) {
    count *= i
  }
  return count
}

/**
 * @desc 数组累加
 * @param {number} num 目标数字
 * @returns {number}
 */
export const cumsum = (rest: number[]): number => {
  let sum = 0
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum
}
