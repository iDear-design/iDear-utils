import {DOC} from "../_libs/config/system";

/**
 * @description 是否支持全屏
 * @returns {boolean}
 */
export const isFullscreen = (): boolean => {
  return (
    DOC.fullscreenEnabled ||
    DOC.mozFullScreenEnabled ||
    DOC.webkitFullscreenEnabled ||
    DOC.msFullscreenEnabled
  )
}
