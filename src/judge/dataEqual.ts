/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
export const isArrEqual = (arr1: number[] | string[], arr2: number[] | string[]): boolean => {
  if (arr1.length !== arr2.length) return false
  if (arr1 === arr2) return true
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}
