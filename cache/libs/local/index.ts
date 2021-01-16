import isLocal from "@idear-tools/judge";
import local from "@idear-tools/config";

const isCheck = (): boolean => {
  let isHas: boolean = isLocal()
  if (!isLocal()) console.error('对不起，您的运行环境不支持localStorage！')
  return isHas
}

/**
 * 设置localStorage
 * @param {string} localKey 键名
 * @param {string} localData 值
 * */
export function setLocal(localKey: string, localData: any) {
  if (!isCheck()) return
  JSON.stringify(local.setItem(localKey, localData))
}

/**
 * 读取localStorage
 * @param {string} localKey 键名
 * */
export function getLocal(localKey: string) {
  if (!isCheck()) return
  return JSON.parse(local.getItem(localKey))
}

/**
 * 删除localStorage
 * @param {string} localKey 键名
 * */
export function removeLocal(localKey: string) {
  if (!isCheck()) return
  local.removeItem(localKey)
}

/**
 * 清除localStorage
 * */
export function cleanLocal() {
  if (!isCheck()) return
  local.clear()
}

/**
 * 得到某个索引的key
 * @param {string} keyIndex 索引值
 * */
export function localKey(keyIndex: number) {
  if (!isCheck()) return
  return local.key(keyIndex)
}

/**
 * 得到localStorage的缓存数量
 * */
export function localNum() {
  if (!isCheck()) return
  return local.length
}
