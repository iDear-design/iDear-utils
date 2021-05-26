import {DOC} from "../_base/system";
import {getTime} from "../date/attribute";

/**
 * @description 插入head中的link stylesheet
 * @param {NodeList} stylesheets 要插入的link
 * @param {HTMLIFrameElement} tagName 要插入的iframe 即:document.querySelector('body').appendChild(document.createElement('iframe'))
 * @returns {any}
 */
export const setLink = (stylesheets: NodeList, tagName?: HTMLIFrameElement) => {
  let heads = DOC.getElementsByTagName('head')[0]
  if (tagName) {
    const {head} = tagName.contentDocument;
    heads = head
  }
  stylesheets.forEach((item: Node) => {
    heads.appendChild(item.cloneNode(true))
  })
}

/**
 * @description 插入style
 * @param {NodeList} stylesheets 要插入的style
 * @param {HTMLIFrameElement} tagName
 * @returns {any}
 */
export const setStyle = (styles: NodeList, tagName?: HTMLIFrameElement) => {
  let bodys = DOC.getElementsByTagName('body')[0]
  if (tagName) {
    const {body} = tagName.contentDocument;
    bodys = body
  }
  styles.forEach((item: Node) => {
    bodys.appendChild(item.cloneNode(true))
  })
}

/**
 * @description 给某些class插入style增加相同的样式
 * @param {Array<string>} cls class集合 如：['.idear-hidden', '.print-hidden']
 * @param {string} tagName class的样式 如：'{display: none !important;width: 100%;}'
 * @param {HTMLIFrameElement} tagName 要插入的iframe
 * @returns {any}
 */
export const setClassStyle = (cls: Array<string>, style: string, tagName?: HTMLIFrameElement) => {
  let bodys = DOC.getElementsByTagName('body')[0]
  if (tagName) {
    const {body} = tagName.contentDocument;
    bodys = body
  }
  let link: Element = document.createElement("style");
  link.id = `idear-style_${getTime()}`
  link.setAttribute('type', 'text/css');
  let cssString: string = cls.join(",") + style;
  let cssText = DOC.createTextNode(cssString);
  link.appendChild(cssText);
  bodys.appendChild(link)
}

/**
 * @description 插入外部链接样式
 * @param {Array<string>} stylesheets 要插入的link路径
 * @param {HTMLIFrameElement} tagName 要插入的iframe
 * @returns {any}
 */
export const setLoadCss = (loadCss: Array<string>, tagName?: HTMLIFrameElement) => {
  let heads = DOC.getElementsByTagName('head')[0]
  if (tagName) {
    const {head} = tagName.contentDocument;
    heads = head
  }
  loadCss.forEach((item: string) => {
    let link: Element = document.createElement("link");
    link.id = `idear-Loadcss_${getTime()}`
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', item);
    heads.appendChild(link)
  })
}
