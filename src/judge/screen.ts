import {doc} from "../config/system";

/**
 * @description 是否支持全屏
 * @returns {boolean}
 */
export const isFullscreen = (): boolean => {
  return (
    doc.fullscreenEnabled ||
    doc.mozFullScreenEnabled ||
    doc.webkitFullscreenEnabled ||
    doc.msFullscreenEnabled
  )
}
