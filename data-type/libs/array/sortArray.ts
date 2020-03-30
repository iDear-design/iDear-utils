/**
 * 数组排序
 * @param {any[]} arr 数组
 * @param {string} type asc: 升序/desc: 降序/random: 随机
 * @returns {any[]}
 */
export default function sortArray(arr: any[], type?: string): any[] {
  type = type || 'asc'
  return arr.sort((a: number, b: number): any => {
    switch (type) {
      case 'asc': // 升序
        return a - b;
      case 'desc':// 降序
        return b - a;
      case 'random':// 随机
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
}
