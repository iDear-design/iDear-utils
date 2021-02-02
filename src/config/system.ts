/**
 * @desc 导出window
 * */
const win: Window = window || (window as any)

/**
 * @desc 导出document
 * */
const doc: Document = document || (document as any)

/**
 * @desc 导出Navigator
 * */
const nav: Navigator = navigator || (navigator as any)

export default {
  win,
  doc,
  nav
}
