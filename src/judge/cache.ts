import {LOCAL, SESSION, WEBSQL} from "../_libs/config/cache";
import {nav} from "../_libs/config/system";

/**
 * @description 判断是否支持localStorage
 * @returns {boolean}
 * */
export const isLocal = (): boolean => {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof LOCAL !== 'undefined' && 'setItem' in LOCAL && !!LOCAL.setItem)
  } catch (e) {
    console.error('对不起，您的运行环境不支持localStorage！')
    return false;
  }
}

/**
 * @description 判断是否支持sessionStorage
 * @returns {boolean}
 * */
export const isSession = (): boolean => {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof SESSION !== 'undefined' && 'setItem' in SESSION && !!SESSION.setItem)
  } catch (e) {
    console.error('对不起，您的运行环境不支持essionStorage！')
    return false;
  }
}

/**
 * @description 判断是否支持WebSQL
 * @returns {boolean}
 * */
export const isWebSQL = (): boolean => {
  if(typeof WEBSQL === 'function'){
    return true
  }else{
    console.error('对不起，您的运行环境不支持WebSQL！')
    return false;
  }
}

/**
 * @description 判断是否支持indexDB
 * @returns {boolean}
 * */
export const isIndexDB = () => {
  try {
    if (!getIndexDB() || !getIndexDB().open) return false;
    // @ts-ignore
    let isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(nav.userAgent) && !/Chrome/.test(nav.userAgent) && !/BlackBerry/.test(nav.platform)
    let hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1
    return ((!isSafari || hasFetch) && typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined')
  } catch (e) {
    console.error('对不起，您的运行环境不支持indexDB！')
    return false;
  }
}

/**
 * @description 获取IndexDB
 * @returns {boolean}
 * */
const getIndexDB = () => {
  /** global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
  try {
    if (typeof indexedDB !== 'undefined') {
      return indexedDB;
    }
    // @ts-ignore
    if (typeof webkitIndexedDB !== 'undefined') {
      // @ts-ignore
      return webkitIndexedDB;
    }
    // @ts-ignore
    if (typeof mozIndexedDB !== 'undefined') {
      // @ts-ignore
      return mozIndexedDB;
    }
    // @ts-ignore
    if (typeof OIndexedDB !== 'undefined') {
      // @ts-ignore
      return OIndexedDB;
    }
    // @ts-ignore
    if (typeof msIndexedDB !== 'undefined') {
      // @ts-ignore
      return msIndexedDB;
    }
  } catch (e) {
    return;
  }
}
