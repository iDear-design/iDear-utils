import {dataTypeString} from "../_base/dataType";

/**
 * @description 判断是否为空
 * @param {any} target
 * @return {Boolean}
 */
export const isEmpty = (target: any): boolean => {
  let empty: boolean = false;
  if (dataTypeString(target) === 'Object') return isObjEmpty(target)
  if (dataTypeString(target) === 'String') return isStrEmpty(target)
  if (dataTypeString(target) === 'Array') return isArrEmpty(target)
  if (target === null || target === undefined || target === NaN) empty = true
  return empty
}


/**
 * @description 判断`str`是否为空
 * @param {string} str
 * @return {Boolean}
 */
export const isStrEmpty = (str: string): boolean => {
  return str.length === 0 && str === ''
}

/**
 * @description 判断`obj`是否为空
 * @param {Object} obj
 * @return {Boolean}
 */
export const isObjEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0
}

/**
 * @description 判断`obj`是否为空
 * @param {Array} arr
 * @return {Boolean}
 */
export const isArrEmpty = (arr: Array<any>): boolean => {
  return arr.length === 0
}
