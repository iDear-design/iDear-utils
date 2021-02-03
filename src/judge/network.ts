/**
 * @desc 判断是否是内网ip
 * @param {string} ip ip地址
 * @returns {boolean}
 */
export const isLAN = (ip: string): boolean => {
  ip.toLowerCase()
  if (ip === "") return false
  if (ip === 'localhost' || ip === '127.0.0.1') return true
  let a_ip = 0
  let aNum = ip.split(".") || []
  if (aNum.length != 4) return false
  a_ip += parseInt(aNum[0]) << 24
  a_ip += parseInt(aNum[1]) << 16
  a_ip += parseInt(aNum[2]) << 8
  a_ip += parseInt(aNum[3]) << 0
  a_ip = a_ip >> 16 & 0xFFFF
  return (a_ip >> 8 == 0x7F || a_ip >> 8 == 0xA || a_ip == 0xC0A8 || (a_ip >= 0xAC10 && a_ip <= 0xAC1F))
}
