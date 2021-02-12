/**
 * @desc api实例全局默认值
 * */
const Attributes: any = {path: '/'}

/**
 * @desc 默认转换器
 * */
const converter = {
  read: function (value) {
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
}

/**
 * @desc assign处理arguments得到target
 * */
const assign = function (...target) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}

/**
 * @desc 默认转换器
 * */
let defaultConverter: any = converter

/**
 * @desc api实例全局默认值
 * */
let defaultAttributes: any = Attributes

/**
 * @desc 设置cookie
 * @param {string} key 键名
 * @param {string} value 值
 * @param {string} attributes 方法
 * */
export function setCookie(key: string, value: any, attributes: any) {
  if (typeof (document as any) === 'undefined') return

  attributes = assign({}, defaultAttributes, attributes)

  if (typeof attributes.expires === 'number') {
    attributes.expires = new Date(Date.now() + attributes.expires * 864e5)
  }
  if (attributes.expires) {
    attributes.expires = attributes.expires.toUTCString()
  }

  key = encodeURIComponent(key)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape)

  value = defaultConverter.write(value, key)

  let stringifiedAttributes = ''
  for (let attributeName in attributes) {
    if (!attributes[attributeName]) {
      continue
    }

    stringifiedAttributes += '; ' + attributeName

    if (attributes[attributeName] === true) {
      continue
    }
    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
  }

  return ((document as any).cookie = key + '=' + value + stringifiedAttributes)
}

/**
 * @desc 读取cookie
 * @param {string} key 键名
 * */
export function getCookie(key: string) {
  if (typeof (document as any) === 'undefined' || (arguments.length && !key)) {
    return
  }
  let cookies: any = (document as any).cookie ? (document as any).cookie.split('; ') : []
  let jar: any = {}
  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split('=')
    let value = parts.slice(1).join('=')

    if (value[0] === '"') {
      value = value.slice(1, -1)
    }
    try {
      let foundKey = defaultConverter.read(parts[0])
      jar[foundKey] = defaultConverter.read(value, foundKey)

      if (key === foundKey) {
        break
      }
    } catch (e) {
    }
  }

  return key ? jar[key] : jar
}

/**
 * @desc 删除cookie
 * @param {string} key 键名
 * @param {string} attributes 方法
 * */
export function removeCookie(key: string, attributes: any) {
  setCookie(key, '', assign({}, attributes, {expires: -1}))
}

/**
 * @desc 清除cookie
 * */
export function clearCookie() {
  let keys = cookieKey();
  keys.forEach(element => {
    setCookie(element, "", -24);
  });
}

/**
 * @desc 获取所有cookie
 * */
export function cookieKey() {
  let arr = document.cookie.split(";");
  let keys = [];
  for (let i = 0; i < arr.length; i++) {
    let arrTemp = arr[i].split("=");
    keys.push(arrTemp[0]);
  }
  return keys;
}

/**
 * @desc 获取所有cookie
 * */
export function cookieLength() {
  let keys = cookieKey();
  return keys.length
}

/**
 * @desc 设置默认值(创建api实例来全局设置)
 * */
export function withAttributes(attributes: any) {
  defaultConverter = {value: Object.freeze(converter)}
  defaultAttributes = assign({}, {value: Object.freeze(Attributes)}, attributes)
}

/**
 * @desc 转换器(创建一个覆盖默认解码实现的api新实例)
 * */
export function withConverter(converter: any) {
  defaultConverter = assign({}, {value: Object.freeze(Attributes)}, converter)
  defaultAttributes = {value: Object.freeze(Attributes)}
}

/**
 * @desc cookie汇总
 * */
const cookie = {
  set: setCookie,
  get: getCookie,
  remove: removeCookie,
  clean: clearCookie,
  keys: cookieKey,
  length: cookieLength,
  attributes: withAttributes,
  converter: withConverter
}

export default cookie;
