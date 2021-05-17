/**
 * @description 创建uuid
 * @param {String} hex: uuid用到的哪些字符串
 * @returns {String}
 */
export const createUuid = (hex: string): string => {
  let s = []
  let hexDigits = hex || '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  let uuidStr = s.join('')
  return uuidStr
}
