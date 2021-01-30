/**
 * 导出window
 * */
const win: Window = window || (window as any)

/**
 * 导出document
 * */
const doc: Document = document || (document as any)

/**
 * 导出Navigator
 * */
const nav: Navigator = navigator || (navigator as any)

export default {
  win,
  doc,
  nav
}
