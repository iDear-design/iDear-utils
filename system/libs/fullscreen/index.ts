/**
 * ## 判读是否支持全屏
 * @returns {boolean}
 */
export function isFullscreen(): boolean {
  return (
    (document as any).fullscreenEnabled ||
    (document as any).mozFullScreenEnabled ||
    (document as any).webkitFullscreenEnabled ||
    (document as any).msFullscreenEnabled
  )
}

/**
 * ## 设置全屏
 * @param {any} element 选择器
 * @returns {boolean}
 */
export function fullscreen(element: any) {
  if (element.requestFullScreen) {
    element.requestFullScreen()
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  }
}

/**
 * ## 退出全屏
 * @param {any} element 选择器
 * @returns {boolean}
 */
export function exitFullscreen(element: any) {
  if (element.exitFullscreen) {
    element.exitFullscreen()
  } else if (element.mozCancelFullScreen) {
    element.mozCancelFullScreen()
  } else if (element.webkitExitFullscreen) {
    element.webkitExitFullscreen()
  }
}
