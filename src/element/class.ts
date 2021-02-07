import {isHasClass} from "../judge/element";

/**
 * @desc 为元素添加class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
export const addClass = (ele: HTMLElement, cls: string) => {
  if (!isHasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
}

/**
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
export const removeClass = (ele: HTMLElement, cls: string) => {
  if (isHasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}
