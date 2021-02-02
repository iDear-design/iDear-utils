import {dataTypeArr} from "../config/dataType";

/**
 * @desc 是否字符串
 * @param {string} str 目标值
 * @returns {boolean}
 */
export const isString = (str: string): boolean => {
  return dataTypeArr(str) === '[object String]'
}

/**
 * @desc 是否数组
 * @param {string} arr 目标值
 * @returns {boolean}
 */
export const isArray = (arr: any[]): boolean => {
  return dataTypeArr(arr) === '[object Array]'
}

/**
 * @desc 是否对象
 * @param {string} obj 目标值
 * @returns {boolean}
 */
export const isObject = (obj: boolean): boolean => {
  return dataTypeArr(obj) === '[object Object]'
}

/**
 * @desc 是否数字
 * @param {string} num 目标值
 * @returns {boolean}
 */
export const isNumber = (num: number): boolean => {
  return dataTypeArr(num) === '[object Number]'
}

/**
 * @desc 是否boolean
 * @param {string} bool 目标值
 * @returns {boolean}
 */
export const isBoolean = (bool: boolean): boolean => {
  return dataTypeArr(bool) === '[object Boolean]'
}

/**
 * @desc 是否时间
 * @param {string} date 目标值
 * @returns {boolean}
 */
export const isDate = (date: Date): boolean => {
  return dataTypeArr(date) === '[object Date]'
}

/**
 * @desc 是否函数
 * @param {string} fun 目标值
 * @returns {boolean}
 */
export const isFunction = (fun: boolean): boolean => {
  return dataTypeArr(fun) === '[object Function]'
}

/**
 * @desc 是否undefined
 * @param {string} bool 目标值
 * @returns {boolean}
 */
export const isUndefined = (bool: boolean): boolean => {
  return dataTypeArr(bool) === '[object Undefined]'
}

/**
 * @desc 是否正则
 * @param {string} rex 目标值
 * @returns {boolean}
 */
export const isRegExp = (rex: any): boolean => {
  return dataTypeArr(rex) === '[object RegExp]'
}

/**
 * @desc 是否错误对象
 * @param {string} err 目标值
 * @returns {boolean}
 */
export const isError = (err: any): boolean => {
  return dataTypeArr(err) === '[object Error]'
}

/**
 * @desc 是否Symbol函数
 * @param {string} sym 目标值
 * @returns {boolean}
 */
export const isSymbol = (sym: any): boolean => {
  return dataTypeArr(sym) === '[object Symbol]'
}

/**
 * @desc 是否ArrayBuffer
 * @param {string} sym 目标值
 * @returns {boolean}
 */
export const isArrayBuffer = (sym: any): boolean => {
  return dataTypeArr(sym) === '[object ArrayBuffer]'
}

/**
 * @desc 是否Promise对象
 * @param {string} proms 目标值
 * @returns {boolean}
 */
export const isPromise = (proms: any): boolean => {
  return dataTypeArr(proms) === '[object Promise]'
}

/**
 * @desc 是否Set对象
 * @param {string} set 目标值
 * @returns {boolean}
 */
export const isSet = (set: any): boolean => {
  return dataTypeArr(set) === '[object Set]'
}

/**
 * @desc 是否Set对象
 * @param {string} target 目标值
 * @returns {boolean}
 */
export const isFalse = (target: any): boolean => {
  if (!target || target === 'null' || target === 'undefined' || target === 'false' || target === 'NaN') return true
  return false
}


/**
 * @desc 是否Set对象
 * @param {string} target 目标值
 * @returns {boolean}
 */
export const isTrue = (target: any): boolean => {
  return !isFalse(target)
}
