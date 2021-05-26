import {DOC} from "../_base/system";
import {printConfig} from "../_types/defaultType";
import {printDefaultData} from "../_base/download";
import {createIframe, removeIframe} from "../element/create";
import {setClassStyle, setLink, setLoadCss, setStyle} from "../element/style";

/**
 * @description 打印页面
 * @param {Element} el: 打印目标dom节点
 * @param {printConfig} options: 打印的相关参数
 * @returns {any}
 */
export const print = (el: Element, options: printConfig): any => {
  if (!el) {
    throw new Error('打印目标dom节点不能为空')
  }
  this.init()
  this.eleDom = el.cloneNode(true)
  const option: printConfig = {
    ...printDefaultData,
    ...options
  }
  this.option = option
  this.Iframe = createIframe()
  this.IframeWin = formetIframe()
  if (this.option.beforePrinfHandle) {
    this.option.beforePrinfHandle(this.IframeWin.contentDocument);
  }
  if (this.option.afterPrintHandle) {
    this.option.afterPrintHandle();
  }
  let timeOut = setTimeout(() => {
    this.IframeWin.print();
    if (this.Iframe) {
      clearTimeout(timeOut)
      removeIframe(this.Iframe);
      this.init()
    }
  }, this.option.delay)
}

/**
 * @description 处理iframe
 * @returns {any}
 */
const formetIframe = () => {
  const {body} = this.Iframe.contentDocument;
  this.Iframe.style.display = 'none'
  // 插入link
  if (this.option.importCss) {
    const link = DOC.querySelectorAll('link')
    if (link?.length) setLink(link, this.Iframe)
  }
  // 插入style
  if (this.option.importStyle) {
    const style = DOC.querySelectorAll("style")
    if (style?.length) setStyle(style, this.Iframe)
  }
  // 插入外部样式文件
  if (this.option.loadCss?.length) {
    setLoadCss(this.option.loadCss, this.Iframe)
  }
  // 隐藏不需要打印的class名
  if (this.option.noPrint?.length) {
    const style: string = '{display: none !important;}'
    setClassStyle(this.option.loadCss, style, this.Iframe)
  }
  const contentWindow = this.Iframe.contentWindow;
  body.appendChild(this.eleDom)
  return contentWindow
}

/**
 * @description print的原型链
 * @returns {any}
 */
print.prototype = {
  init: () => {
    this.Iframe = null
    this.option = printDefaultData
    this.IframeWin = null
  },
  /**
   * 预览
   * */
  preview: () => {
    
  }
}

