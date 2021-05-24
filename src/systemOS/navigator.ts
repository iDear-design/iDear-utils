import {NAV} from "../_base/system";
import {browserConfig} from "../_types/defaultType";

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
 * @description 获取浏览器的语言
 * @returns {boolean}
 */
export const getLanguage = (): number => {
  return (NAV.browserLanguage || NAV.language).toLowerCase()
}

/**
 * @description 获取当前浏览器
 * @returns {string}
 */
export const getBrowser = (): browserConfig => {
  let ua = navUserAgent.toLowerCase(), s, sys: browserConfig = {version: '', name: 'Unkonwn'};
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys = {version: s[1], name: 'IE'} :
    (s = ua.match(/msie ([\d\.]+)/)) ? sys = {version: s[1], name: 'IE'} :
      (s = ua.match(/edge\/([\d\.]+)/)) ? sys = {version: s[1], name: 'EDGE'} :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys = {version: s[1], name: 'Firefox'} :
          (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys = {version: s[1], name: 'Opera'} :
            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys = {version: s[1], name: 'Chrome'} :
              (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys = {version: s[1], name: 'Safari'} : sys;
  return sys;
};

/**
 * @description 获取当前浏览器名称
 * @returns {boolean}
 */
export const getBrowserName = (): string => {
  let sys: browserConfig = getBrowser()
  return sys.name
}

/**
 * @description 获取当前浏览器版本
 * @returns {boolean}
 */
export const getBrowserVersion = (): string => {
  let sys: browserConfig = getBrowser()
  return sys.version
}

/**
 * @description 获取navigator常用信息
 * @return {Object}
 */
export const getNavInfo = () => {
  let navInfo: any = {
    name: getBrowserName(),
    version: getBrowserVersion(),
    language: getLanguage(),
    navType: getNavType(),
    webType: getWebType(),
    mobileType: getMobileType()
  }
  return navInfo
}
