/**
 * ## 统计数组中各个元素出现的次数
 * @param {any[]} arr 数组
 * @returns {any[]}
 */
export default function staNum(arr: any[]): any {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let m = arr[i];
    if (obj.hasOwnProperty(m)) {
      obj[m] += 1;
    } else {
      obj[m] = 1;
    }
  }
  return obj
}
