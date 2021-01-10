import isSession from "@idear-tools/judge";
import session from "@idear-tools/config";

const isCheck = (): boolean => {
  let isHas: boolean = isSession()
  if (!isSession()) console.error('对不起，您的运行环境不支持sessionStorage！')
  return isHas
}


// 保存数据（可设置过期时间）
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

// 读取数据
export function getSession(sessionKey: string) {
  if (!isCheck()) return
  return JSON.parse(session.getItem(sessionKey))
}

// 删除数据
export function removeSession(sessionKey: string) {
  if (!isCheck()) return
  session.removeItem(sessionKey)
}

// 删除所有缓存数据
export function cleanSession() {
  if (!isCheck()) return
  session.clear()
}

// 得到某个索引的key
export function sessionKey(keyIndex: number) {
  if (!isCheck()) return
  return session.key(keyIndex)
}

// 得到session的缓存数量
export function sessionNum() {
  if (!isCheck()) return
  return session.length
}
