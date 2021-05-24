import {WIN} from "../_base/system";

/**
 * @description 浏览器高度
 */
export const outerHeight = WIN.outerHeight

/**
 * @description 浏览器宽度
 */
export const outerWidth = WIN.outerWidth

/**
 * @description 浏览器内页面可用高度；此高度包含了水平滚动条的高度(若存在)。可表示为浏览器当前高度去除浏览器边框、工具条后的高度
 */
export const innerHeight = WIN.innerHeight

/**
 * @description 浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。可表示为浏览器当前宽度去除浏览器边框后的宽度
 */
export const innerWidth = WIN.innerWidth

/**
 * @description 任务栏宽度
 */
export const taskWidth = outerWidth - innerWidth

/**
 * @description 任务栏高度
 */
export const taskHeight = outerHeight - innerHeight

/**
 * @description 获取到角度【横屏、竖屏】
 * @returns {boolean}
 */
export const getAngle = (): number => {
  return WIN.orientation || 0
}

/**
 * @description 获取navigator常用信息
 * @return {Object}
 */
export const getWinInfo = () => {
  let winInfo: any = {
    angle: getAngle(),
    outerHeight: outerHeight,
    outerWidth: outerWidth,
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    taskbarWidth: taskWidth,
    taskbarHeight: taskHeight
  }
  return winInfo
}
