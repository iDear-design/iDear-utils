/**
 * @desc 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * @param {Array<any>} arr 目标数组
 * @param {number} size 长度
 * @returns {Array<any>}
 */
export const arrChunk = (arr: Array<any>, size: number): Array<any> => {
  if (arr.length === 0) return []
  size = size || 1
  const bigArr = []
  let smallArr = []
  arr.forEach(item => {
    if (smallArr.length === 0) bigArr.push(smallArr)
    smallArr.push(item)
    if (smallArr.length === size) smallArr = []
  })

  return bigArr
}

/**
 * @desc 数组差集
 * @param {Array<any>} arr1 数组1
 * @param {Array<any>} arr2 数组2
 * @returns {Array<any>}
 */
export const arrDiff = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
  let newArr1: any = new Set(arr1)
  let newArr2: any = new Set(arr2)
  return [].concat(arr1.filter((item) => !newArr2.has(item))).concat(arr2.filter((item) => !newArr1.has(item)))
}

/**
 * @desc
 * @param {Array<any>} arr1 数组1
 * @param {Array<any>} arr2 数组2
 * @returns {Array<any>}
 */
export const arrDiffWith = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
  let newArr: any = new Set(arr2)
  return [].concat(arr1.filter((item) => newArr.has(item)))
}

/**
 * @desc 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)
 * @param {Array<any>} arr1 数组1
 * @param {Array<any>} arr2 数组2
 * @returns {Array<any>}
 */
export const arrDiffFirst = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
  if (arr1.length === 0) return []
  else if (arr2.length === 0) return arr1.slice()
  return arr1.filter(item => arr2.indexOf(item) === -1)
}

/**
 * @desc 得到数组过滤掉左边count个后剩余元素组成的数组
 * @param {Array<any>} arr 数组1
 * @param {number} count 数组2
 * @returns {Array<any>}
 */
export const arrDropLeft = (arr: Array<any>, count: number): Array<any> => {
  if (arr.length === 0 || count >= arr.length) return []
  count = count || 1
  return arr.filter((_item: any, index: number) => index >= count)
}

/**
 * @desc 得到数组过滤掉右边count个后剩余元素组成的数组
 * @param {Array<any>} arr 数组1
 * @param {number} count 数组2
 * @returns {Array<any>}
 */
export const arrDropRight = (arr: Array<any>, count: number): Array<any> => {
  if (arr.length === 0 || count >= arr.length) return []
  count = count || 1
  return arr.filter((_item: any, index: number) => index < arr.length - count)
}
