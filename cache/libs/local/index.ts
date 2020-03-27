import local from "./localInfo";

// 保存数据
export function setLocal(localKey: string, localData: any) {
  JSON.stringify(local.setItem(localKey, localData))
}

// 读取数据
export function getLocal(localKey: string) {
  return JSON.parse(local.getItem(localKey))
}

// 删除数据
export function removeLocal(localKey: string) {
  local.removeItem(localKey)
}

// 删除所有缓存数据
export function cleanLocal() {
  local.clear()
}

// 得到某个索引的key
export function localKey(keyIndex: number) {
  return local.key(keyIndex)
}

// 得到session的缓存数量
export function localNum() {
  return local.length
}
