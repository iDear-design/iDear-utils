/**
 * ## 数字超过xx显示xx+
 * @param {number} num 目标数字
 * @param {number} maxNum 超过的数字
 * @param {string} numType 超过目标数字显示的字符
 * @returns {string | number}
 */
export function numFilter(num: number = 0, maxNum: number = 0, numType: string = '+'): string | number {
  if (num > maxNum) {
    return maxNum + numType
  } else {
    return num
  }
}
