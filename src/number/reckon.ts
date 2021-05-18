/** @description 数字的加减乘法等计算 */

/**
 * @description 目标数字的次方数
 * @param {number} num 目标数字
 * @param {number} num2 次方数
 * @returns {number}
 */
export const numPowe = (num: number, num2: number): number => {
  if (num2 == 0) {
    return 1
  } else if (num2 % 2 == 0) {
    return numPowe(num, Math.floor(num2 / 2)) * numPowe(num, Math.floor(num2 / 2))
  } else {
    return num * numPowe(num, Math.floor(num2 / 2)) * numPowe(num, Math.floor(num2 / 2))
  }
}

/**
 * @description 阶乘
 * @param {number} num 目标数字
 * @returns {number}
 */
export const numFactorial = (num: number): number => {
  let count = 1
  for (let i = 1; i <= num; i++) {
    count *= i
  }
  return count
}

/**
 * @description 数组累加
 * @param {number} num 目标数字
 * @returns {number}
 */
export const numCumsum = (rest: number[]): number => {
  let sum = 0
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum
}
