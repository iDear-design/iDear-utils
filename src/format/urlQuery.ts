import {WIN} from "../_base/system";

/**
 * @description url参数转对象
 * @param {string} url 地址，默认：window.location.href
 * @returns {object}
 */
export const getQuery = (url?: string): object => {
  url = url == null ? WIN.location.href : url
  let search = url.substring(url.lastIndexOf('?') + 1)
  if (!search) return {}
  let query: object = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}') || {}
  return query
}

/**
 * @description 获取Url里的某个参数
 * @param {string} url 地址，默认：window.location.href
 * @returns {object}
 */
export const getQueryKey = (key: string, url?: string): string => {
  const query = url ? getQuery(url) : getQuery();
  return query[key];
}

/**
 * @description url对象序列化
 * @param {object} url 地址
 * @returns {string}
 */
export const setQuery = (obj: object): string => {
  if (!obj) return '';
  let pairs = [];
  for (let key in obj) {
    let value = obj[key];
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue;
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return pairs.join('&');
}
