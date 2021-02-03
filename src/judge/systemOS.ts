import {nav} from "../config/system";
import userAgents from "../config/userAgent";

/**
 * @desc 是否android终端
 * @returns {boolean}
 */
export const isAndroid = (): boolean => {
  let Android: boolean = nav.userAgent.indexOf('Android') > -1 || nav.userAgent.indexOf('Adr') > -1
  return Android
}

/**
 * @desc 是否iOS终端
 * @returns {boolean}
 */
export const isIOS = (): boolean => {
  let iOS: boolean = nav.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return iOS
}

/**
 * @desc 是否移动端
 * @returns {boolean}
 */
export const isMobile = (): boolean => {
  let mobile: boolean = (nav.userAgent.toLowerCase()).indexOf(userAgents) >= 0
  return mobile
}

/**
 * @desc 是否移动端
 * @returns {boolean}
 */
export const isPc = (): boolean => {
  let pc: boolean = !isMobile()
  return pc
}
