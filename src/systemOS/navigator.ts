import {NAV} from "../_base/system";

/**
 * @description navigator中的userAgent
 */
export const navUserAgent: any = NAV.userAgent

/**
 * @description navigator中的userAgent
 */
export const navAppVersion: any = NAV.appVersion

/**
 * @description 获取操作系统类型
 * @return {String}
 */
export const getNavType = () => {
  let userAgent = 'navigator' in window && 'userAgent' in NAV && navUserAgent.toLowerCase() || '';
  let appVersion = 'navigator' in window && 'appVersion' in NAV && navAppVersion.toLowerCase() || '';
  // let vendor = 'navigator' in window && 'vendor' in NAV && NAV.vendor.toLowerCase() || '';

  if (/mac/i.test(appVersion)) return 'MacOSX'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'

}

/**
 * @description 判断是手机吗
 * @return {String}
 */
export const getWebType = () => {
  if (getNavType() === 'ios' || getNavType() === 'android' || getNavType() === 'windowsPhone') return 'mobile'
  else return 'web'
}

/**
 * @description 判断手机类型
 * @return {String}
 */
export const getMobileType = () => {
  if (getNavType() === 'ios') return 'iPhone'
  else if (getNavType() === 'android') return 'Android'
  else if (getNavType() === 'windowsPhone') return 'WindowsPhone'
  else return null
}

/**
 * @description 获取navigator常用信息
 * @return {Object}
 */
export const getNavInfo = () => {
  let navInfo: any = {
    appVersion: navAppVersion,
    navType: getNavType(),
    webType: getWebType(),
    mobileType: getMobileType()
  }
  return navInfo
}
