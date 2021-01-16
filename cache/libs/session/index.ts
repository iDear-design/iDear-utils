import isSession from "@idear-tools/judge";
import session from "@idear-tools/config";

const isCheck = (): boolean => {
  let isHas: boolean = isSession()
  if (!isSession()) console.error('对不起，您的运行环境不支持sessionStorage！')
  return isHas
}

/**
 * 设置sessionStorage
 * @param {string} sessionKey 键名
 * @param {any} sessionData 值
 * @param {number} expires 值
 * */
export function setSession(sessionKey: string, sessionData: any, expires?: number) {
  if (!isCheck()) return
  if (expires) {
    let params = {sessionKey, sessionData, expires}
    // 记录何时将值存入缓存，毫秒级
    let data = Object.assign(params, {startTime: new Date().getTime()})
    localStorage.setItem(sessionKey, JSON.stringify(data));
  } else {
    JSON.stringify(session.setItem(sessionKey, sessionData))
  }
}

/**
 * 读取sessionStorage
 * @param {string} sessionKey 键名
 * */
export function getSession(sessionKey: string) {
  if (!isCheck()) return
  return JSON.parse(session.getItem(sessionKey))
}

/**
 * 删除sessionStorage
 * @param {string} sessionKey 键名
 * */
export function removeSession(sessionKey: string) {
  if (!isCheck()) return
  session.removeItem(sessionKey)
}

/**
 * 清除sessionStorage
 * */
export function cleanSession() {
  if (!isCheck()) return
  session.clear()
}

/**
 * 得到某个索引的key
 * @param {string} keyIndex 索引值
 * */
export function sessionKey(keyIndex: number) {
  if (!isCheck()) return
  return session.key(keyIndex)
}

// 得到sessionStorage的缓存数量
/**
 * 得到session的缓存数量
 * */
export function sessionNum() {
  if (!isCheck()) return
  return session.length
}
