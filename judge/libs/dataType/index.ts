import {protoTypeArr} from "@idear-tools/config";

/**
 * ## 是否字符串
 * @param {string} str 目标值
 * @returns {boolean}
 */
function isString(str: string): boolean {
  return protoTypeArr(str) === '[object String]'
}

/**
 * ## 是否数组
 * @param {string} arr 目标值
 * @returns {boolean}
 */
function isArray(arr: any[]): boolean {
  return protoTypeArr(arr) === '[object Array]'
}

/**
 * ## 是否对象
 * @param {string} obj 目标值
 * @returns {boolean}
 */
function isObject(obj: boolean): boolean {
  return protoTypeArr(obj) === '[object Object]'
}

/**
 * ## 是否数字
 * @param {string} num 目标值
 * @returns {boolean}
 */
function isNumber(num: number): boolean {
  return protoTypeArr(num) === '[object Number]'
}

/**
 * ## 是否boolean
 * @param {string} bool 目标值
 * @returns {boolean}
 */
function isBoolean(bool: boolean): boolean {
  return protoTypeArr(bool) === '[object Boolean]'
}

/**
 * ## 是否时间
 * @param {string} date 目标值
 * @returns {boolean}
 */
function isDate(date: Date): boolean {
  return protoTypeArr(date) === '[object Date]'
}

/**
 * ## 是否函数
 * @param {string} fun 目标值
 * @returns {boolean}
 */
function isFunction(fun: boolean): boolean {
  return protoTypeArr(fun) === '[object Function]'
}

/**
 * ## 是否undefined
 * @param {string} bool 目标值
 * @returns {boolean}
 */
function isUndefined(bool: boolean): boolean {
  return protoTypeArr(bool) === '[object Undefined]'
}

/**
 * ## 是否正则
 * @param {string} rex 目标值
 * @returns {boolean}
 */
function isRegExp(rex: any): boolean {
  return protoTypeArr(rex) === '[object RegExp]'
}

/**
 * ## 是否错误对象
 * @param {string} err 目标值
 * @returns {boolean}
 */
function isError(err: any): boolean {
  return protoTypeArr(err) === '[object Error]'
}

/**
 * ## 是否Symbol函数
 * @param {string} sym 目标值
 * @returns {boolean}
 */
function isSymbol(sym: any): boolean {
  return protoTypeArr(sym) === '[object Symbol]'
}

/**
 * ## 是否Promise对象
 * @param {string} proms 目标值
 * @returns {boolean}
 */
function isPromise(proms: any): boolean {
  return protoTypeArr(proms) === '[object Promise]'
}

/**
 * ## 是否Set对象
 * @param {string} set 目标值
 * @returns {boolean}
 */
function isSet(set: any): boolean {
  return protoTypeArr(set) === '[object Set]'
}

/**
 * ## 是否Set对象
 * @param {string} target 目标值
 * @returns {boolean}
 */
function isFalse(target: any): boolean {
  if (!target || target === 'null' || target === 'undefined' || target === 'false' || target === 'NaN') return true
  return false
}


/**
 * ## 是否Set对象
 * @param {string} target 目标值
 * @returns {boolean}
 */
function isTrue(target: any): boolean {
  return !this.isFalse(target)
}

export default {
  isString,
  isArray,
  isObject,
  isNumber,
  isBoolean,
  isDate,
  isFunction,
  isUndefined,
  isRegExp,
  isError,
  isSymbol,
  isPromise,
  isSet,
  isFalse,
  isTrue
}
