import {regExp} from "../_base/regExp";

/**
 * @description 检测密码强度
 * @param {pwding} pwd 字符串
 * @returns {boolean}
 */
export const pwdStrength = (pwd: string): number => {
  let Strength: number = 0;
  if (pwd.length < 6) {
    return Strength
  }
  if (regExp.number.test(pwd)) Strength++
  if (regExp.lower.test(pwd)) Strength++
  if (regExp.upper.test(pwd)) Strength++
  if (regExp.symbols.test(pwd)) Strength++
  return Strength;
}
