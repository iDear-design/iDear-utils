import {doc} from "@idear-utils/config";

/**
 * ## 判读是否支持全屏
 * @returns {boolean}
 */
export function isFullscreen(): boolean {
  return (
    doc.fullscreenEnabled ||
    doc.mozFullScreenEnabled ||
    doc.webkitFullscreenEnabled ||
    doc.msFullscreenEnabled
  )
}
