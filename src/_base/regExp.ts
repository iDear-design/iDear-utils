import {regExpConfig, fileRegExpConfig} from "../_types";

/**
 * @description 检验各种数据类型正则表达式
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

export const regExp: regExpConfig = {
  phone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[567]|17[0135678]|18[0-9]|19[189])\d{8}$/,
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  idCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
  pwd: /^[a-zA-Z]\w{5,17}$/,
  postal: /[1-9]\d{5}(?!\d)/,
  QQ: /^[1-9][0-9]{4,9}$/,
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  money: /^\d*(?:\.\d{0,2})?$/,
  URL: /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  date: /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/,
  date2: /^(\d{4})\-(\d{2})\-(\d{2})$/,
  number: /^[0-9]$/,
  english: /^[a-zA-Z]+$/,
  chinese: /^([\u4e00-\u9fa5]|[\ufe30-\uffA0])*$/,
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  HTML: /<("[^"]*"|'[^']*'|[^'">])*>/,
  bankCard: /^\d{16}|\d{19}$/,
  symbols: /[\.|-|_]/,
  color: /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/
}

export const fileRegExp: fileRegExpConfig = {
  img: /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig,
  video: /(mp4|mp3|flv|wav)$/ig,
  document: /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|h|shtml|xml)$/ig,
  office: /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig
}
