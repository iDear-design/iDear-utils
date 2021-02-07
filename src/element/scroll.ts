import {doc} from "../config/system";
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

/**
 * @desc 获取滚动条距顶部的距离
 */
export const getScrollTop = (): number => {
  return (doc.documentElement && doc.documentElement.scrollTop) || doc.body.scrollTop;
}

/**
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
export const offset = (ele: HTMLElement) => {
  let pos = {
    left: 0,
    top: 0
  }
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
  }
  return pos;
}
