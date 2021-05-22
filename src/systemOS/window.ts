import {WIN, nav} from "../_libs/config/system";
import {navUserAgent} from "./navigator";

/**
 * @description 浏览器高度
 */
export const outerHeight = WIN.outerHeight

/**
 * @description 浏览器宽度
 */
export const outerWidth = WIN.outerWidth

/**
 * @description 浏览器内页面可用高度；此高度包含了水平滚动条的高度(若存在)。可表示为浏览器当前高度去除浏览器边框、工具条后的高度
 */
export const innerHeight = WIN.innerHeight

/**
 * @description 浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。可表示为浏览器当前宽度去除浏览器边框后的宽度
 */
export const innerWidth = WIN.innerWidth

/**
 * @description 任务栏宽度
 */
export const taskWidth = outerWidth - innerWidth

/**
 * @description 任务栏高度
 */
export const taskHeight = outerHeight - innerHeight

/**
 * @description 获取浏览器的语言
 * @returns {boolean}
 */
export const chromLanguage = (): number => {
  return (nav.browserLanguage || nav.language).toLowerCase()
}

/**
 * @description 获取浏览器的语言
 * @returns {boolean}
 */
export const kwrnelVersion = (): object => {
  let versions: object = {
    trident: navUserAgent.indexOf('Trident') > -1, // IE内核
    presto: navUserAgent.indexOf('Presto') > -1, // opera内核
    webKit: navUserAgent.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    // gecko: navUserAgent.indexOf('Gecko') > -1 && navUserAgent.indexOf('KHTML') == -1,// 火狐内核
    // mobile: !!navUserAgent.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    // ios: !!navUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    // android: navUserAgent.indexOf('Android') > -1 || navUserAgent.indexOf('Adr') > -1, // android终端
    // iPhone: navUserAgent.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    // iPad: navUserAgent.indexOf('iPad') > -1, // 是否iPad
    // webApp: navUserAgent.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
    // weixin: navUserAgent.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    // qq: navUserAgent.match(/\sQQ/i) == " qq" // 是否QQ
  };
  return versions
}

/**
 * @description 获取到角度【横屏、竖屏】
 * @returns {boolean}
 */
export const getAngle = (): number => {
  return WIN.orientation || 0
}


/**
 * @description 获取到对应的浏览器内核
 * @returns {boolean}
 */
export const getVersions = (): object => {
  let versions: any = kwrnelVersion()
  if (versions.trident) return {version: 'trident', name: 'IE内核'}
  else if (versions.presto) return {version: 'Presto', name: 'opera内核'}
  else if (versions.webKit) return {version: 'AppleWebKit', name: 'IE内核'}
}

/**
 * @description 获取navigator常用信息
 * @return {Object}
 */
export const getWinInfo = () => {
  let winInfo: any = {
    language: chromLanguage(),
    angle: getAngle(),
    version: getVersions(),
    outerHeight: outerHeight,
    outerWidth: outerWidth,
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    taskbarWidth: taskWidth,
    taskbarHeight: taskHeight
  }
  return winInfo
}
