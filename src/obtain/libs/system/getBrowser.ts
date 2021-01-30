import {win,nav} from "@idear-utils/config";
import {getUserAgent} from "./getNavigator";

// 浏览器高度
export const outerHeight = win.outerHeight

// 浏览器宽度
export const outerWidth = win.outerWidth

// 浏览器内页面可用高度；此高度包含了水平滚动条的高度(若存在)。可表示为浏览器当前高度去除浏览器边框、工具条后的高度
export const innerHeight = win.innerHeight

// 浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。可表示为浏览器当前宽度去除浏览器边框后的宽度
export const innerWidth = win.innerWidth

// 任务栏宽度
export const taskbarWidth = outerWidth - innerWidth

// 任务栏高度
export const taskbarHeight = outerHeight - innerHeight

// 获取浏览器的语言
export const getLanguage = (): String =>{
  return (nav.browserLanguage || nav.language).toLowerCase()
}

export default function versions() {
  let userAgent = getUserAgent()
  return {
    trident: userAgent.indexOf('Trident') > -1, // IE内核
    presto: userAgent.indexOf('Presto') > -1, // opera内核
    webKit: userAgent.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') == -1,// 火狐内核
    mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1, // android终端
    iPhone: userAgent.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: userAgent.indexOf('iPad') > -1, // 是否iPad
    webApp: userAgent.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
    weixin: userAgent.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    qq: userAgent.match(/\sQQ/i) == " qq" // 是否QQ
  };
}
