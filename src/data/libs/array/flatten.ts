/**
 * ## 数组扁平化: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * @param {array} array 数组
 * @returns {any[]} 如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
 */

export function flatten1(array) {
  return array.reduce((pre, item) => {
    if (Array.isArray(item)) {
      return pre.concat(flatten1(item))
    } else {
      return pre.concat(item)
    }
  }, [])
}
