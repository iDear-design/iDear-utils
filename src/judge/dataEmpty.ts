/**
 * @desc 判断`obj`是否为空
 * @param {Object} obj
 * @return {Boolean}
 */
export const isObjEmpty = (obj: Object): boolean => {
  return Object.keys(obj).length === 0
}

/**
 * @desc 判断`obj`是否为空
 * @param {Array} arr
 * @return {Boolean}
 */
export const isArrEmpty = (arr: Array<any>): boolean => {
  return arr.length === 0
}
