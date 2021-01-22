import {doc} from "@idear-tools/config";

/**
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
  return (doc.documentElement && doc.documentElement.scrollTop) || doc.body.scrollTop;
}
