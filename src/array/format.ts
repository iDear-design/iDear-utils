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
