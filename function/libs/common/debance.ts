/**
 * 函数防抖动
 * @param {*执行函数} fn
 * @param {*时间间隔} wait
 */

function debance(fn: any, wait: number) {
  let timer = null
  return function () {
    let _this = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, wait)
  }
}
