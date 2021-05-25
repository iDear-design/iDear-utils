import {regExp} from "../_base/regExp";
import {regExpTypeConfig} from "../_types";

/**
 * @description 检验各种数据类型
 * @param {string} str 检查的字符串
 * @param {string} type [
 *    phone-手机号码
 *    tel-座机
 *    idCard-身份证
 *    pwd-密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 *    postal-邮政编码
 *    QQ-QQ号
 *    email-邮箱
 *    money-金额(小数点2位)
 *    URL-网址
 *    IP-IP地址
 *    date-日期时间
 *    number-数字
 *    english-英文
 *    chinese-中文
 *    lower-小写
 *    upper-大写
 *    HTML-HTML标记
 * ]
 * @returns {boolean}
 */
export const regexpType = (str: string, type: regExpTypeConfig): boolean => {
  switch (type) {
    case 'phone':   //手机号码
      return regExp.phone.test(str);
    case 'tel':     //座机
      return regExp.tel.test(str);
    case 'idCard':    //身份证
      return regExp.idCard.test(str);
    case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return regExp.pwd.test(str)
    case 'postal':  //邮政编码
      return regExp.postal.test(str);
    case 'QQ':      //QQ号
      return regExp.QQ.test(str);
    case 'email':   //邮箱
      return regExp.email.test(str);
    case 'money':   //金额(小数点2位)
      return regExp.money.test(str);
    case 'URL':     //网址
      return regExp.URL.test(str)
    case 'IP':      //IP
      return regExp.IP.test(str);
    case 'date':    //日期时间
      return regExp.date.test(str) || regExp.date2.test(str)
    case 'number':  //数字
      return regExp.number.test(str);
    case 'english': //英文
      return regExp.english.test(str);
    case 'chinese': //中文
      return regExp.chinese.test(str);
    case 'lower':   //小写
      return regExp.phone.test(str);
    case 'upper':   //大写
      return regExp.upper.test(str);
    case 'HTML':    //HTML标记
      return regExp.HTML.test(str);
    default:
      return true;
  }
}

/**
 * @description 阶乘
 * @param {string} str 检查的字符串
 * @param {RegExp} regExp 检查的正则
 * @returns {number}
 */
export const regexpCheck = (str: string, regExp: RegExp): boolean => {
  return regExp.test(str)
}
