/** @description 字符串的基本信息：（如长度、类型...） */

/**
 * @description 获取当前时间
 * @return {number}
 */
export const newDate = (): Date => {
  let date: Date = new Date()
  return date
}

/**
 * @description 获取当前时间
 * @return {number}
 */
export const getTime = (): number => {
  return newDate().getTime()
}
