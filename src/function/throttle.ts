/**
 * @desc 节流函数
 * @param {Function} fun 被节流的函数
 * @param {Function} delay 节流间隔时间，单位毫秒
 * @returns {any}
 */
export default function index(fun: Function, delay: number): any {
  let last: number = +new Date();
  // 定时器
  let timer: number;
  return function (...args: any[]) {
    clearTimeout(timer);
    let now: number = +new Date();
    if (now - last >= delay) {
      fun.apply(this, args);
      last = now;
    } else {
      timer = setTimeout(() => {
        fun.apply(this, args);
        last = now;
      })
    }
  }
}
