/**
 * 节流函数
 * @param {*要执行的函数} fn
 * @param {*等待时间} wait
 */
function throttle(fn: any, wait: number) {
  let _lastTime = null
  return function () {
    let _nowTime = new Date()
    // @ts-ignore
    if (_nowTime - _lastTime > wait || !_lastTime) {
      fn()
      _lastTime = _nowTime
    }
  }
}
