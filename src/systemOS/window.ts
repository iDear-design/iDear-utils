import {win} from "../config/system";

/**
 * @desc 获取到角度【横屏、竖屏】
 * @returns {boolean}
 */
export const getAngle = (): number => {
  return win.orientation || 0
}
