import {regExp} from "../_base/regExp";

/**
 * @description 判断是否手机号码
 * @param {string} str
 * @return {Boolean}
 */
export const isPhoneNumber = (str: string): boolean => {
  return regExp.phone.test(str);
}

/**
 * @description 判断是否座机号码
 * @param {string} str
 * @return {Boolean}
 */
export const isTelPhoneNumber = (str: string): boolean => {
  return regExp.tel.test(str);
}

/**
 * @description 判断是否身份证
 * @param {string} str
 * @return {Boolean}
 */
export const isIdCard = (str: string): boolean => {
  return regExp.idCard.test(str);
}

/**
 * @description 判断是否密码（密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线）
 * @param {string} str
 * @return {Boolean}
 */
export const isPassword = (str: string): boolean => {
  return regExp.pwd.test(str);
}

/**
 * @description 判断是否邮政编码
 * @param {string} str
 * @return {Boolean}
 */
export const isPostal = (str: string): boolean => {
  return regExp.postal.test(str);
}

/**
 * @description 判断是否QQ
 * @param {string} str
 * @return {Boolean}
 */
export const isQQ = (str: string): boolean => {
  return regExp.QQ.test(str);
}

/**
 * @description 判断是否邮箱
 * @param {string} str
 * @return {Boolean}
 */
export const isEmail = (str: string): boolean => {
  return regExp.email.test(str);
}

/**
 * @description 判断是否金额(小数点2位)
 * @param {string} str
 * @return {Boolean}
 */
export const isMoney = (str: string): boolean => {
  return regExp.money.test(str);
}

/**
 * @description 判断是否URL
 * @param {string} str
 * @return {Boolean}
 */
export const isURL = (str: string): boolean => {
  return regExp.URL.test(str);
}

/**
 * @description 判断是否IP
 * @param {string} str
 * @return {Boolean}
 */
export const isIP = (str: string): boolean => {
  return regExp.IP.test(str);
}

/**
 * @description 判断是否日期时间
 * @param {string} str
 * @return {Boolean}
 */
export const isDate = (str: string): boolean => {
  return regExp.date.test(str);
}

/**
 * @description 判断是否数字
 * @param {string} str
 * @return {Boolean}
 */
export const isNumber = (str: string): boolean => {
  return regExp.number.test(str);
}

/**
 * @description 判断是否english
 * @param {string} str
 * @return {Boolean}
 */
export const isEnglish = (str: string): boolean => {
  return regExp.english.test(str);
}

/**
 * @description 判断是否chinese
 * @param {string} str
 * @return {Boolean}
 */
export const isChinese = (str: string): boolean => {
  return regExp.chinese.test(str);
}

/**
 * @description 判断是否小写
 * @param {string} str
 * @return {Boolean}
 */
export const isLower = (str: string): boolean => {
  return regExp.lower.test(str);
}

/**
 * @description 判断是否大写
 * @param {string} str
 * @return {Boolean}
 */
export const isUpper = (str: string): boolean => {
  return regExp.upper.test(str);
}

/**
 * @description 判断是否大写
 * @param {string} str
 * @return {Boolean}
 */
export const isHTML = (str: string): boolean => {
  return regExp.HTML.test(str);
}
