import {DOC} from "../_base/system";

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
