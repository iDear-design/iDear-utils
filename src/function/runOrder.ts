/**
 * @description 执行顺序生命
 */
const reducer: any = (f: Function, g: Function) => (...args) => f(g(...args));

/**
 * @description 函数组合：从右向左执行
 * @param  {[Function,]}  fns
 */
export const funCompose = (...fns: Array<Function>) => {
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce(reducer);
}

/**
 * @description 函数管道：从左向右执行
 * @param  {[Function,]} fns
 */
export const funPipe = (...fns: Array<Function>) => {
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduceRight(reducer);
}
