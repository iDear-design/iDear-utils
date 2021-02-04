import {nav} from "../config/system";

/**
 * @desc navigator中的userAgent
 */
export const navUserAgent: any = nav.userAgent

/**
 * @desc navigator中的userAgent
 */
export const navAppVersion: any = nav.appVersion

/**
 * @desc 获取操作系统类型
 * @return {String}
 */
export const navType = () => {
  let userAgent = 'navigator' in window && 'userAgent' in nav && navUserAgent.toLowerCase() || '';
  let appVersion = 'navigator' in window && 'appVersion' in nav && navAppVersion.toLowerCase() || '';
  let vendor = 'navigator' in window && 'vendor' in nav && nav.vendor.toLowerCase() || '';

  if (/mac/i.test(appVersion)) return 'MacOSX'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'

}

/**
 * @desc 判断是手机吗
 * @return {String}
 */
export const webType = () => {
  if (navType() === 'ios' || navType() === 'android' || navType() === 'windowsPhone') return 'mobile'
  else return 'web'
}

/**
 * @desc 判断手机类型
 * @return {String}
 */
export const mobileType = () => {
  if (navType() === 'ios') return 'iPhone'
  else if (navType() === 'android') return 'Android'
  else if (navType() === 'windowsPhone') return 'WindowsPhone'
  else return null
}

/**
 * @desc 获取navigator常用信息
 * @return {Object}
 */
export const getNavInfo = () => {
  let navInfo: any = {
    appVersion: navAppVersion,
    navType: navType(),
    webType: webType(),
    mobileType: mobileType()
  }
  return navInfo
}
