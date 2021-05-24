import {DOC} from "../_base/system";

/**
 * @description html转成字符串
 * @param {HTMLElement} htmlDOM
 * @param {string}
 */
export const htmlToStirng = (htmlDOM: HTMLElement): string => {
  let temp = DOC.createElement("div");
  temp.appendChild(htmlDOM);
  return temp.innerHTML;
};

/**
 * @description 字符串转html
 * @param {string} htmlDOM
 * @param {HTMLElement}
 */
export const stringToHtml = (htmlString: string): HTMLElement => {
  var temp = DOC.createElement("div");
  temp.innerHTML = htmlString;
  return temp.children[0];
};
