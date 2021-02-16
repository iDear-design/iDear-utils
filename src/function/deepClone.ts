/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @param {Any}
 */
export function deepClone(data: object): any {
  let copy: any;
  // the 3 simple types, and null or undefined
  if (null == data || "object" != typeof data) return data;

  // Date
  if (data instanceof Date) {
    copy = new Date();
    copy.setTime(data.getTime());
    return copy;
  }
  // Array
  if (data instanceof Array) {
    copy = [];
    for (var i = 0, len = data.length; i < len; i++) {
      copy[i] = deepClone(data[i]);
    }
    return copy;
  }

  // Object
  if (data instanceof Object) {
    copy = {};
    for (var attr in data) {
      if (data.hasOwnProperty(attr)) copy[attr] = deepClone(data[attr]);
    }
    return copy;
  }

  copy = JSON.parse(JSON.stringify(data))
  return copy
}
