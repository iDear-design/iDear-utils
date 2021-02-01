/**
 * ## 数组对象去重
 * @param {object[]} arrObj 数组对象
 * @param {string} key 对象属性key
 * @returns {any[]}
 */
export function uniqueArrayObj(arrObj: object[], key: string): object[] {
  let arr = []
  let r = []
  for (let i = 0; i < arrObj.length; i++) {
    let item = arrObj[i]
    if (r.indexOf(item[key]) !== -1) {
      continue
    }
    r.push(item[key])
    arr.push(item)
  }
  return arr
}
