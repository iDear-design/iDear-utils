/**
 * ## 防抖函数
 * @param {Function} fun  被执行防抖操作的函数
 * @param {Function} delay 节流间隔时间，单位毫秒
 * @returns {any}
 */
export default function index(fun: Function, delay: number): any {
  let timer: number;
  return function (...args: any[]) {
    clearTimeout(timer);
    let _this: any = this;
    timer = setTimeout(() => {
      fun.apply(_this, args);
    }, delay)
  }
}
