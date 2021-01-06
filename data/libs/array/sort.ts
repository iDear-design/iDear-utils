/**
 * ## 冒泡排序
 * @param {number[]} arr 目标数组
 * @param {string} type asc:升序   desc:降序
 * @returns {boolean}
 */
export function bubbleSort(arr: number[], type: string = 'asc'): number[] {
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
 * ## 选择排序
 * @param {number[]} arr 目标数组
 * @param {string} type asc:升序   desc:降序
 * @returns {boolean}
 */
export function selectSort(arr: number[], type: string = 'asc'): number[] {
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
 * ## 插入排序
 * @param {number[]} arr 目标数组
 * @param {string} type asc:升序   desc:降序
 * @returns {boolean}
 */
export function insertSort(arr: number[], type: string = 'asc'): number[] {
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
