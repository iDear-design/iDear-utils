import regExp from "../_base/regExp";

/**
 * @description 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
export const isHasClass = (ele: HTMLElement, cls: string) => {
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}

/**
 * @description 判断是否含有html标签
 * @param {string} value
 * @return {Boolean}
 */
export const isHtml = (value: string) => {
  return regExp.HTML.test(value);
};
