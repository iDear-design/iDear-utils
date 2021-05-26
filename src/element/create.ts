import {DOC} from "../_base/system";

/**
 * @description 创建iframe
 * @returns {any}
 */
export const createIframe = (iframeId: string = 'idear-iframe', iframeTitle: string = 'idear-iframe'): HTMLIFrameElement => {
  let iframe: HTMLIFrameElement = DOC.createElement('iframe');
  iframe.id = iframeId
  DOC.querySelector('body').appendChild(iframe)
  iframe.contentDocument.title = iframeTitle;
  return iframe
}

/**
 * @description 移除iframe
 * @returns {any}
 */
export const removeIframe = (iframe?: HTMLIFrameElement): any => {
  DOC.querySelector('body').removeChild(iframe)
}
