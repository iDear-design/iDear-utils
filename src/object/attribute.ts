/** @desc 对象的基本信息：（如长度、类型...） */

/**
 * @desc 获取对象的key
 * @param  {object} obj
 * @return {Array<any>}
 */
export const objKeys = (obj: object): Array<any> => {
  return Object.keys(obj)
}

/**
 * @desc 获取对象的value
 * @param  {object} obj
 * @return {Array<any>}
 */
export const objValues = (obj: object): Array<any> => {
  return Object.values(obj)
}

/**
 * @desc 获取对象的长度
 * @param  {object} obj
 * @return {number}
 */
export const objLength = (obj: object): number => {
  return objKeys(obj).length
}
