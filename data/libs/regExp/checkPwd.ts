import regExp from "@idear-tools/config"

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
  if (regExp.number.test(pwd)) Strength++
  if (regExp.lower.test(pwd)) Strength++
  if (regExp.upper.test(pwd)) Strength++
  if (regExp.symbols.test(pwd)) Strength++
  return Strength;
}
