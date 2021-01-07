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
