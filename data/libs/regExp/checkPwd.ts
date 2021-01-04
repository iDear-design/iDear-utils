/**
 * ## 检测密码强度
 * @param {pwding} pwd 字符串
 * @returns {boolean}
 */
export default function checkPwd(pwd: string): number {
  var Strength = 0;
  if (pwd.length < 6) {
    return Strength
  }
  if (/[0-9]/.test(pwd)) {
    Strength++
  }
  if (/[a-z]/.test(pwd)) {
    Strength++
  }
  if (/[A-Z]/.test(pwd)) {
    Strength++
  }
  if (/[\.|-|_]/.test(pwd)) {
    Strength++
  }
  return Strength;
}
