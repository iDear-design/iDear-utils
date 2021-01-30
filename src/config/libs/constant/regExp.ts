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

/**
 * 参考地址：https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E7%A7%BB%E5%8A%A8%E7%BB%88%E7%AB%AF%E9%80%9A%E8%AE%AF%E5%8F%B7%E6%AE%B5#%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8
 *
 * 中国电信号段：133、149、153、173、177、180、181、189、191、199
 * 中国联通号段：130、131、132、145、155、156、166、175、176、185、186
 * 中国移动号段：134(0-8)、135、136、137、138、139、147、150、151、152、157、158、159、178、182、183、184、187、188、198
 *
 * 其他号段：
 * 14号段以前为上网卡专属号段，如中国联通的是145，中国移动的是147等等。
 * 虚拟运营商
 * 电信：1700、1701、1702
 * 移动：165、1703、1705、1706
 * 联通：167、1704、1707、1708、1709、171
 *
 * 待分配号段：154、161、162、164、190、192、193、194、195、196、197
 * /^(13[0-9]|14[579]|15[0-3,5-9]|16[567]|17[0135678]|18[0-9]|19[189])\d{8}$/
 * */
const regExp: regExpConfig = {
  phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/, // /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
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
  chinese: /^[\u4E00-\u9FA5]+$/,
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  HTML: /<("[^"]*"|'[^']*'|[^'">])*>/,
  symbols: /[\.|-|_]/,
  color: /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/
}

export default regExp
