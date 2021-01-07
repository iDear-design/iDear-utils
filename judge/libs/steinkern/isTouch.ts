// 判断是否Touch屏幕
export default function isTouch() {
  return ('ontouchstart' in window) || (window as any).DocumentTouch
}
