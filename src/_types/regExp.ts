/**
 * 声明存在的正则验证
 * */
export interface regExpConfig {
  phone: RegExp
  tel: RegExp
  idCard: RegExp
  pwd: RegExp
  postal: RegExp
  QQ: RegExp
  email: RegExp
  money: RegExp
  URL: RegExp
  IP: RegExp
  date: RegExp
  date2: RegExp
  number: RegExp
  english: RegExp
  chinese: RegExp
  lower: RegExp
  upper: RegExp
  HTML: RegExp
  bankCard: RegExp
  symbols: RegExp
  color: RegExp
}

export interface fileRegExpConfig {
  img: RegExp,
  video: RegExp,
  document: RegExp,
  office: RegExp
}

/**
 * 声明检验各种数据类型的数据类型
 * */
export type regExpTypeConfig =
  'phone'
  | 'tel'
  | 'idCard'
  | 'pwd'
  | 'postal'
  | 'QQ'
  | 'email'
  | 'money'
  | 'URL'
  | 'IP'
  | 'date'
  | 'number'
  | 'english'
  | 'chinese'
  | 'lower'
  | 'upper'
  | 'HTML'
  | 'bankCard'
  | 'symbols'
  | 'color'
