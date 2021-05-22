import {numRandom} from "../number/attribute";

/**
 * @description 随机生成颜色
 * @return {String}
 */
export const randomColor = (): string => {
  return '#' + ('00000' + (numRandom() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 * @description 生成随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export const randomNum = (): number => {
  let rdNum: number = Math.random();
  return rdNum
}

/**
 * @description 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export const randomNumRange = (min: number, max: number): number => {
  return Math.floor(numRandom() * (max - min + 1)) + min;
}
