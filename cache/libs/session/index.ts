import session from "./sessionInfo";

// 保存数据（可设置过期时间）
export function setSession(sessionKey: string, sessionData: any, expires?: number) {
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
  return JSON.parse(session.getItem(sessionKey))
}

// 删除数据
export function removeSession(sessionKey: string) {
  session.removeItem(sessionKey)
}

// 删除所有缓存数据
export function cleanSession() {
  session.clear()
}

// 得到某个索引的key
export function sessionKey(keyIndex: number) {
  return session.key(keyIndex)
}

// 得到session的缓存数量
export function sessionNum() {
  return session.length
}
