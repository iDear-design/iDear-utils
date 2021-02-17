/**
 * @desc 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * @param {Array<any>} arr 目标数组
 * @param {number} size 长度
 * @returns {Array<any>}
 */
export const arrChunk = (arr: Array<any>, size: number): Array<any> => {
  if (arr.length === 0) return []
  size = size || 1
  const bigArr = []
  let smallArr = []
  arr.forEach(item => {
    if (smallArr.length === 0) bigArr.push(smallArr)
    smallArr.push(item)
    if (smallArr.length === size) smallArr = []
  })

  return bigArr
}

/**
 * @desc 数组差集
 * @param {Array<any>} arr1 数组1
 * @param {Array<any>} arr2 数组2
 * @returns {Array<any>}
 */
export const arrDiff = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
  let newArr1: any = new Set(arr1)
  let newArr2: any = new Set(arr2)
  return [].concat(arr1.filter((item) => !newArr2.has(item))).concat(arr2.filter((item) => !newArr1.has(item)))
}

/**
 * @desc
 * @param {Array<any>} arr1 数组1
 * @param {Array<any>} arr2 数组2
 * @returns {Array<any>}
 */
export const arrDiffWith = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
  let newArr: any = new Set(arr2)
  return [].concat(arr1.filter((item) => newArr.has(item)))
}

/**
 * @desc 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)
 * @param {Array<any>} arr1 数组1
 * @param {Array<any>} arr2 数组2
 * @returns {Array<any>}
 */
export const arrDiffFirst = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
  if (arr1.length === 0) return []
  else if (arr2.length === 0) return arr1.slice()
  return arr1.filter(item => arr2.indexOf(item) === -1)
}

/**
 * @desc 得到数组过滤掉左边count个后剩余元素组成的数组
 * @param {Array<any>} arr 数组1
 * @param {number} count 数组2
 * @returns {Array<any>}
 */
export const arrDropLeft = (arr: Array<any>, count: number): Array<any> => {
  if (arr.length === 0 || count >= arr.length) return []
  count = count || 1
  return arr.filter((_item: any, index: number) => index >= count)
}

/**
 * @desc 得到数组过滤掉右边count个后剩余元素组成的数组
 * @param {Array<any>} arr 数组1
 * @param {number} count 数组2
 * @returns {Array<any>}
 */
export const arrDropRight = (arr: Array<any>, count: number): Array<any> => {
  if (arr.length === 0 || count >= arr.length) return []
  count = count || 1
  return arr.filter((_item: any, index: number) => index < arr.length - count)
}

/**
 * @desc 数组扁平化: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * @param {Array<any>} array 数组
 * @returns {any[]} 如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
 */
export const arrFlatten = (arr: Array<any>): Array<any> => {
  return arr.reduce((pre, item) => {
    if (Array.isArray(item)) return pre.concat(arrFlatten(item))
    else return pre.concat(item)
  }, [])
}

/**
 * @desc 删除数组中与value相同的元素, 返回所有删除元素的数组
 * @param {Array<number> | Array<string>} arr 数组
 * @returns {any[]} 如: arrPull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]
 */
export const arrPull = (arr: Array<number> | Array<string>, ...arr2: any) => {
  if (arr.length === 0 || arr2.length === 0) return []
  arr2 = Array.from(new Set(arr2))
  let result = []
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    if (arr2.indexOf(item) !== -1) {
      arr.splice(index, 1)
      result.push(item)
      index--
    }
  }
  return result
}

/**
 * @desc 功能与pull一致, 只是参数变为数组
 * @param {Array<number> | Array<string>} arr  数组
 * @param {Array<number> | Array<string>} arr2  数组
 * @returns {any[]} arrPullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]
 */
export const arrPullAll = (arr: Array<number> | Array<string>, arr2: Array<number> | Array<string>) => {
  if (!arr2 || !Array.isArray(arr2)) return []
  return arrPull(arr, ...arr2)
}


/**
 * @desc 数组对象去重
 * @param {Array<object>} arrObj 数组对象
 * @param {string} key 对象属性key
 * @returns {Array<any>}
 */
export const arrUnique = (arrObj: Array<object>, key: string): Array<any> => {
  let arr: Array<any> = []
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
