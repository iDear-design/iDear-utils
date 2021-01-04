/**
 * ## 数组差集
 * @param {any} arr1 数组1
 * @param {any} arr2 数组2
 * @returns {any[]}
 */
export function difference(arr1: any[], arr2: any[]): any[] {
  let newArr1: any = new Set(arr1)
  let newArr2: any = new Set(arr2)
  return [].concat(arr1.filter((item) => !newArr2.has(item))).concat(arr2.filter((item) => !newArr1.has(item)))
}

/**
 * ## 数组交集
 * @param {any} arr1 数组1
 * @param {any} arr2 数组2
 * @returns {any[]}
 */
export function differenceWith(arr1: any[], arr2: any[]): any[] {
  let newArr: any = new Set(arr2)
  return [].concat(arr1.filter((item) => newArr.has(item)))
}
