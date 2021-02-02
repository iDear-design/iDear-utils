import {local, session, webSQL} from "../config/cache";
import {nav} from "../config/system";

/**
 * @desc 判断是否支持localStorage
 * @returns {boolean}
 * */
export const isLocal = (): boolean => {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof local !== 'undefined' && 'setItem' in local && !!local.setItem)
  } catch (e) {
    return false;
  }
}

/**
 * @desc 判断是否支持sessionStorage
 * @returns {boolean}
 * */
export const isSession = (): boolean => {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof session !== 'undefined' && 'setItem' in session && !!session.setItem)
  } catch (e) {
    return false;
  }
}

/**
 * @desc 判断是否支持WebSQL
 * @returns {boolean}
 * */
export const isWebSQL = (): boolean => {
  return typeof webSQL === 'function';
}

/**
 * @desc 判断是否支持indexDB
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
    return false;
  }
}

/**
 * @desc 获取IndexDB
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
