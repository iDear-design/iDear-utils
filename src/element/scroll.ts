import {doc} from "../config/system";

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
