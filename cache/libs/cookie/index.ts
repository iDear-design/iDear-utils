import assign from "./assign";
import converter from "./converter";

const Attributes: any = {path: '/'}

let defaultConverter: any = converter
let defaultAttributes: any = Attributes

// 保存数据
export function setCookie(key: string, value: any, attributes: any) {
  if (typeof (document as any) === 'undefined') {
    return
  }

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

// 读取数据
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

// 删除数据
export function removeCookie(key: string, attributes: any) {
  setCookie(key, '', assign({}, attributes, {expires: -1}))
}

// 删除所有缓存数据
export function clearCookie() {
  let keys = getKeysCookie();
  keys.forEach(element => {
    setCookie(element, "", -24);
  });
}

// 获取所有的cookie
export function getKeysCookie() {
  let arr = document.cookie.split(";");
  let keys = [];
  for (let i = 0; i < arr.length; i++) {
    let arrTemp = arr[i].split("=");
    keys.push(arrTemp[0]);
  }
  return keys;
}

// 设置默认值(创建api实例来全局设置)
export function withAttributes(attributes: any) {
  defaultConverter = {value: Object.freeze(converter)}
  defaultAttributes = assign({}, {value: Object.freeze(Attributes)}, attributes)
}

// 转换器(创建一个覆盖默认解码实现的api新实例)
export function withConverter(converter: any) {
  defaultConverter = assign({}, {value: Object.freeze(Attributes)}, converter)
  defaultAttributes = {value: Object.freeze(Attributes)}
}
