import {WIN, DOC} from "../_base/system";
import {getAngle} from "../systemOS/window";
import {navUserAgent} from "../systemOS/navigator";
import mobileTypeData from "../_base/mobileType";

/**
 * @description 是否android终端
 * @returns {boolean}
 */
export const isAndroid = (): boolean => {
  let Android: boolean = navUserAgent.indexOf('Android') > -1 || navUserAgent.indexOf('Adr') > -1
  return Android
}

/**
 * @description 是否iOS终端
 * @returns {boolean}
 */
export const isIOS = (): boolean => {
  let iOS: boolean = navUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return iOS
}

/**
 * @description 是否移动端
 * @returns {boolean}
 */
export const isMobile = (): boolean => {
  let mobile: boolean = (navUserAgent.toLowerCase()).indexOf(mobileTypeData) >= 0
  return mobile
}

/**
 * @description 是否移动端
 * @returns {boolean}
 */
export const isWeb = (): boolean => {
  let web: boolean = !isMobile()
  return web
}

/**
 * @description 是否横屏
 * @returns {boolean}
 */
export const isTransverse = (): boolean => {
  let angleNum = getAngle()
  return angleNum === 90 || angleNum === -90
}

/**
 * @description 是否竖屏
 * @returns {boolean}
 */
export const isVertical = (): boolean => {
  let angleNum = getAngle()
  return angleNum === 180 || angleNum === 0
}

/**
 * @description 是否Touch屏幕
 * @returns {boolean}
 */
export const isTouch = (): boolean => {
  return ('ontouchstart' in WIN) || WIN.DocumentTouch
}

/**
 * @description 是否webKit内核
 * @returns {boolean}
 */
export const isWebKit = (): boolean => {
  return navUserAgent.indexOf('WebKit') > -1
}

/**
 * @description 是否IE内核
 * @returns {boolean}
 */
export const isIE = (): boolean => {
  return navUserAgent.indexOf('Trident') > -1
}

/**
 * @description 是否支持webP格式图片
 * @return {Boolean}
 */
export const isSupportWebP = (): boolean => {
  return !![].map && DOC.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
}
