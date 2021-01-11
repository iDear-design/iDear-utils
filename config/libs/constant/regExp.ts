import {regExpConfig} from "../../types/regExp";

/**
 * ## 检验各种数据类型正则表达式
 * phone-手机号码
 * tel-座机
 * idCard-身份证
 * pwd-密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 * postal-邮政编码
 * QQ-QQ号
 * email-邮箱
 * money-金额(小数点2位)
 * URL-网址
 * IP-IP地址
 * date-日期时间
 * number-数字
 * english-英文
 * chinese-中文
 * lower-小写
 * upper-大写
 * HTML-HTML标记
 */
const regExp: regExpConfig = {
  phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  pwd: /^[a-zA-Z]\w{5,17}$/,
  postal: /[1-9]\d{5}(?!\d)/,
  QQ: /^[1-9][0-9]{4,9}$/,
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  money: /^\d*(?:\.\d{0,2})?$/,
  URL: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  date: /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/,
  date2: /^(\d{4})\-(\d{2})\-(\d{2})$/,
  number: /^[0-9]$/,
  english: /^[a-zA-Z]+$/,
  chinese: /^[\u4E00-\u9FA5]+$/,
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  HTML: /<("[^"]*"|'[^']*'|[^'">])*>/,
  symbols: /[\.|-|_]/
}

export default regExp
