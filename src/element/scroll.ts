import {doc, WIN} from "../_libs/config/system";

/**
 * @description 获取滚动条距顶部的距离
 */
export const getScrollTop = (): number => {
  return (doc.documentElement && doc.documentElement.scrollTop) || doc.body.scrollTop;
}

/**
 * @description 设置滚动条距顶部的距离
 * @param {Number} to 滚动的距离
 */
export const setScrollTop = (to: number) => {
  WIN.scrollTo(0, to);
}

/**
 * @description 在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 滚动的距离
 * @param {Number} duration 滚动的时间
 */
export const scrollTo = (to: number, duration: number = 0) => {
  if (duration < 0) {
    setScrollTop(to);
    return
  }
  var diff = to - getScrollTop();
  if (diff === 0) return
  var step = diff / duration * 10;
  requestAnimationFrame(() => {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
      return;
    }
    scrollTo(to, duration - 16);
  });
}

/**
 * @description 获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
export const scrollOffset = (ele: HTMLElement) => {
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
