import {isHasClass} from "@idear-tools/judge"

/**
 * @desc   为元素添加class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */
const addClass = (ele: HTMLElement, cls: string) => {
  if (!isHasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
}

/**
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
const removeClass = (ele: HTMLElement, cls: string) => {
  if (isHasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

export default {
  addClass,
  removeClass
}
