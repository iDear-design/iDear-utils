import {randomNum} from "../create/random";

/**
 * @description 随机排序
 * @param {Array<any>} arr 目标数组
 * @returns {Array<nuanymber>}
 */
export const arrRandomSort = (arr: Array<any>): Array<any> => {
  for (let i = 0, l = arr.length; i < l; i++) {
    let rc = randomNum() * l
    const empty = arr[i]
    arr[i] = arr[rc]
    arr[rc] = empty
  }
  return arr
}

/**
 * @description 冒泡排序
 * @param {Array<number>} arr 目标数组
 * @param {string} type asc:升序   desc:降序
 * @returns {Array<number>}
 */
export const arrBubbleSort = (arr: Array<number>, type: string = 'asc'): Array<number> => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (type === 'asc' && (arr[j] > arr[j + 1])) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      } else if (type === 'desc' && (arr[j] < arr[j + 1])) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

/**
 * @description 选择排序
 * @param {Array<number>} arr 目标数组
 * @param {string} type asc:升序   desc:降序
 * @returns {Array<number>}
 */
export const arrSelectSort = (arr: Array<number>, type: string = 'asc'): Array<number> => {
  let minIndex, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (type === 'asc' && (arr[j] < arr[minIndex])) {
        minIndex = j
      } else if (type === 'desc' && (arr[j] > arr[minIndex])) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

/**
 * @description 插入排序
 * @param {Array<number>} arr 目标数组
 * @param {string} type asc:升序   desc:降序
 * @returns {Array<number>}
 */
export const arrInsertSort = (arr: Array<number>, type: string = 'asc'): Array<number> => {
  let current, preIndex;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i]
    preIndex = i - 1
    if (type === 'asc') {
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + 1] = arr[preIndex]
        preIndex--
      }
    } else if (type === 'desc') {
      while (preIndex >= 0 && arr[preIndex] < current) {
        arr[preIndex + 1] = arr[preIndex]
        preIndex--
      }
    }
    arr[preIndex + 1] = current
  }
  return arr
}

/**
 * @description 二分法排序
 * @param {Array<number>} arr 目标数组
 * @returns {Array<number>}
 */
const arrQuickSort = (arr: Array<number>): Array<number> => {
  if (arr.length <= 1) return arr
  let leftArr = []
  let rightArr = []
  let pivot = randomNum()
  let baseNum: any = arr.splice(pivot, 1)
  arr.forEach((num: number) => {
    if (num < baseNum) {
      leftArr.push(num)
    } else {
      rightArr.push(num)
    }
  })
  return arrQuickSort(leftArr).concat(baseNum, arrQuickSort(rightArr))
}
