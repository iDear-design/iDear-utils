import {isSession} from "../judge/cache";
import {SESSION} from "../config/cache";

/**
 * @description 设置sessionStorage
 * @param {string} keyName 键名
 * @param {any} saveData 值
 * @param {number} expires 值
 * */
export const setSession = (keyName: string, saveData: any, expires?: number) => {
  if (!isSession()) return
  if (expires) {
    let params = {keyName, saveData, expires}
    // 记录何时将值存入缓存，毫秒级
    let data = Object.assign(params, {startTime: new Date().getTime()})
    localStorage.setItem(keyName, JSON.stringify(data));
  } else {
    JSON.stringify(SESSION.setItem(keyName, saveData))
  }
}

/**
 * @description 读取sessionStorage
 * @param {string} keyName 键名
 * */
export const getSession = (keyName: string) => {
  if (!isSession()) return
  return JSON.parse(SESSION.getItem(keyName))
}

/**
 * @description 删除sessionStorage
 * @param {string} keyName 键名
 * */
export const removeSession = (keyName: string) => {
  if (!isSession()) return
  SESSION.removeItem(keyName)
}

/**
 * @description 清除sessionStorage
 * */
export const cleanSession = () => {
  if (!isSession()) return
  SESSION.clear()
}

/**
 * @description 得到某个索引的key
 * @param {string} keyIndex 索引值
 * */
export const sessionKey = (keyIndex: number) => {
  if (!isSession()) return
  return SESSION.key(keyIndex)
}

/**
 * @description 得到sessionStorage的缓存数量
 * */
export const sessionLength = () => {
  if (!isSession()) return
  return SESSION.length
}

/**
 * @description sessionStorage汇总
 * */
const session = {
  set: setSession,
  get: getSession,
  remove: removeSession,
  clean: cleanSession,
  keys: sessionKey,
  length: sessionLength
}

export default session
