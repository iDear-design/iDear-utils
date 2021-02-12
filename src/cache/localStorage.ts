import {LOCAL} from "../config/cache";
import {isLocal} from "../judge/cache";

/**
 * @desc 设置localStorage
 * @param {string} keyName 键名
 * @param {string} saveData 值
 * */
export const setLocal = (keyName: string, saveData: any) => {
  if (!isLocal()) return
  JSON.stringify(LOCAL.setItem(keyName, saveData))
}

/**
 * @desc 读取localStorage
 * @param {string} keyName 键名
 * */
export const getLocal = (keyName: string) => {
  if (!isLocal()) return
  return JSON.parse(LOCAL.getItem(keyName))
}

/**
 * @desc 删除localStorage
 * @param {string} keyName 键名
 * */
export const removeLocal = (keyName: string) => {
  if (!isLocal()) return
  LOCAL.removeItem(keyName)
}

/**
 * @desc 清除localStorage
 * */
export const cleanLocal = () => {
  if (!isLocal()) return
  LOCAL.clear()
}

/**
 * @desc 得到某个索引的key
 * @param {string} keyIndex 索引值
 * */
export const localKey = (keyIndex: number) => {
  if (!isLocal()) return
  return LOCAL.key(keyIndex)
}

/**
 * @desc 得到localStorage的缓存数量
 * */
export const localLength = () => {
  if (!isLocal()) return
  return LOCAL.length
}

/**
 * @desc localStorage汇总
 * */
const local = {
  set: setLocal,
  get: getLocal,
  remove: removeLocal,
  clean: cleanLocal,
  keys: localKey,
  length: localLength
}

export default local;
