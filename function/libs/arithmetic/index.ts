/**
 * ## 阶乘
 * @param {number} num 目标数字
 * @returns {number}
 */
export function factorial(num: number): number {
  let count = 1
  for (let i = 1; i <= num; i++) {
    count *= i
  }
  return count
}

/**
 * ## 数组累加
 * @param {number} num 目标数字
 * @returns {number}
 */
export function cumsum(rest: number[]): number {
  let sum = 0
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum
}
