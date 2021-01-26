import {doc} from "@idear-utils/config";

/**
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function isSupportWebP() {
  return !![].map && doc.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}
