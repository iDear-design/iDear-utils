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


/**
 * ## 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)
 * @param {any} arr1 数组1
 * @param {any} arr2 数组2
 * @returns {any[]}
 */
export function differenceFirst(arr1: any[], arr2: any[]): any[] {
  if (arr1.length === 0) return []
  else if (arr2.length === 0) return arr1.slice()
  return arr1.filter(item => arr2.indexOf(item) === -1)
}
