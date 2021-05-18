/**
 * @description api实例全局默认值
 * */
const Attributes: any = {path: '/'}

/**
 * @description 默认转换器
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
 * @description assign处理arguments得到target
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
 * @description 默认转换器
 * */
let defaultConverter: any = converter

/**
 * @description api实例全局默认值
 * */
let defaultAttributes: any = Attributes

/**
 * @description 设置cookie
 * @param {string} key 键名
 * @param {string} value 值
 * @param {string} attributes 方法
 * */
export const setCookie = function (key: string, value: any, attributes: any) {
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
 * @description 读取cookie
 * @param {string} key 键名
 * */
export const getCookie = function (key: string) {
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
 * @description 删除cookie
 * @param {string} key 键名
 * @param {string} attributes 方法
 * */
export const removeCookie = function (key: string, attributes: any) {
  setCookie(key, '', assign({}, attributes, {expires: -1}))
}

/**
 * @description 清除cookie
 * */
export const clearCookie = function () {
  let keys = cookieKey();
  keys.forEach(element => {
    setCookie(element, "", -24);
  });
}

/**
 * @description 获取所有cookie
 * */
export const cookieKey = function () {
  let arr = document.cookie.split(";");
  let keys = [];
  for (let i = 0; i < arr.length; i++) {
    let arrTemp = arr[i].split("=");
    keys.push(arrTemp[0]);
  }
  return keys;
}

/**
 * @description 获取所有cookie
 * */
export const cookieLength = function () {
  let keys = cookieKey();
  return keys.length
}

/**
 * @description 设置默认值(创建api实例来全局设置)
 * */
export const withAttributes = function (attributes: any) {
  defaultConverter = {value: Object.freeze(converter)}
  defaultAttributes = assign({}, {value: Object.freeze(Attributes)}, attributes)
}

/**
 * @description 转换器(创建一个覆盖默认解码实现的api新实例)
 * */
export const withConverter = function (converter: any) {
  defaultConverter = assign({}, {value: Object.freeze(Attributes)}, converter)
  defaultAttributes = {value: Object.freeze(Attributes)}
}

/**
 * @description cookie汇总
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
