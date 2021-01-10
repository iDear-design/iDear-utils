import isLocal from "@idear-tools/judge";
import local from "@idear-tools/config";

const isCheck = (): boolean => {
  let isHas: boolean = isLocal()
  if (!isLocal()) console.error('对不起，您的运行环境不支持localStorage！')
  return isHas
}

// 保存数据
export function setLocal(localKey: string, localData: any) {
  if (!isCheck()) return
  JSON.stringify(local.setItem(localKey, localData))
}

// 读取数据
export function getLocal(localKey: string) {
  if (!isCheck()) return
  return JSON.parse(local.getItem(localKey))
}

// 删除数据
export function removeLocal(localKey: string) {
  if (!isCheck()) return
  local.removeItem(localKey)
}

// 删除所有缓存数据
export function cleanLocal() {
  if (!isCheck()) return
  local.clear()
}

// 得到某个索引的key
export function localKey(keyIndex: number) {
  if (!isCheck()) return
  return local.key(keyIndex)
}

// 得到session的缓存数量
export function localNum() {
  if (!isCheck()) return
  return local.length
}
