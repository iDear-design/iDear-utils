/**
 * @description 随机数
 * @return {Number}
 */
export const random = (): number => {
  return Math.random()
}

/**
 * @description 随机生成颜色
 * @return {String}
 */
export const randomColor = (): string => {
  return '#' + ('00000' + (random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 * @description 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export const randomNum = (min: number, max: number): number => {
  return Math.floor(random() * (max - min + 1)) + min;
}
