/** array---数组 */
import {arrLength} from "./array/attribute";
import {arrIndexOf, arrLastIndexOf} from "./array/find";
import {
  arrChunk,
  arrDiff,
  arrDiffWith,
  arrDiffFirst,
  arrDropLeft,
  arrDropRight,
  arrFlatten,
  arrPull,
  arrPullAll,
  arrUnique
} from "./array/format";
import {arrStaNum} from "./array/reckon";
import {arrBubble, arrSelect, arrInsert} from "./array/sort";

const arrMethod: any = {
  arrLength,
  arrIndexOf,
  arrLastIndexOf,
  arrChunk,
  arrDiff,
  arrDiffWith,
  arrDiffFirst,
  arrDropLeft,
  arrDropRight,
  arrFlatten,
  arrPull,
  arrPullAll,
  arrUnique,
  arrStaNum,
  arrBubble,
  arrSelect,
  arrInsert
}

/** cache---缓存 */
import {
  setCookie,
  getCookie,
  removeCookie,
  clearCookie,
  cookieKey,
  cookieLength,
  withAttributes,
  withConverter
} from "./cache/cookie";
import {
  setLocal,
  getLocal,
  removeLocal,
  cleanLocal,
  localKey,
  localLength
} from "./cache/localStorage";
import {
  setSession,
  getSession,
  removeSession,
  cleanSession,
  sessionKey,
  sessionLength
} from "./cache/sessionStorage";

const cacheMethod: any = {
  setCookie,
  getCookie,
  removeCookie,
  clearCookie,
  cookieKey,
  cookieLength,
  withAttributes,
  withConverter,
  setLocal,
  getLocal,
  removeLocal,
  cleanLocal,
  localKey,
  localLength,
  setSession,
  getSession,
  removeSession,
  cleanSession,
  sessionKey,
  sessionLength
}

/** check---获取、检查 */
import {idCardCity, idCardBirthday} from "./check/idCard";
import {pwdStrength} from "./check/password";
import {regexpType, regexpCheck} from "./check/regexpType";

const checkMethod: any = {
  idCardCity, idCardBirthday, pwdStrength, regexpType, regexpCheck
}

/** create---创建、生成 */
import {createUuid} from "./create/uuid";
import {randomColor, randomNum} from "./create/random";

const createMethod: any = {
  createUuid, randomColor, randomNum
}

/** download---下载、导出、复制、克隆 */
import {copyText} from "./download/copyText";
import {deepClone} from "./download/deepClone";
import {urlDownload, filesDownload} from "./download/downLoad";

const downloadMethod: any = {
  copyText, deepClone, urlDownload, filesDownload
}

/** element---element相关 */
import {addClass, removeClass} from "./element/class";
import {getScrollTop, setScrollTop, scrollTo, scrollOffset} from "./element/scroll";

const elementMethod: any = {
  addClass, removeClass, getScrollTop, setScrollTop, scrollTo, scrollOffset
}


/** files---文件相关 */
import {secretInfo} from "./encrypt/secretInfo";

const encryptMethod: any = {
  secretInfo
}

/** files---文件相关 */
import {groupPicture} from "./files/picture";
import {countFileSize} from "./files/format";

const filesMethod: any = {
  groupPicture, countFileSize
}

/** format---相关的格式化 */
import {filterTree, filterTreeWith} from "./format/filterTree";
import {getQuery, setQuery} from "./format/urlQuery";

const formatMethod: any = {
  filterTree, filterTreeWith,
  getQuery, setQuery
}

/** function---函数、方法 */
import {funCompose, funPipe} from "./function/runOrder";

const functionMethod: any = {
  funCompose, funPipe
}

/** judge---判断 */
import {isLocal, isSession, isWebSQL, isIndexDB} from "./judge/cache";
import {isObjEmpty, isArrEmpty} from "./judge/dataEmpty";
import {isArrEqual} from "./judge/dataEqual";
import {
  isString,
  isArray,
  isObject,
  isNumber,
  isBoolean,
  isDate,
  isFunction,
  isUndefined,
  isUnll,
  isRegExp,
  isError,
  isSymbol,
  isArrayBuffer,
  isPromise,
  isSet,
  isFalse,
  isTrue
} from "./judge/dataType";
import {isHasClass} from "./judge/element";
import {isIdCard} from "./judge/idCard";
import {isLAN} from "./judge/network";
import {isFullscreen} from "./judge/screen";
import {
  isAndroid,
  isIOS,
  isMobile,
  isWeb,
  isTransverse,
  isVertical,
  isTouch,
  isWebKit,
  isIE,
  isSupportWebP
} from "./judge/systemOS";

const judgeMethod: any = {
  isLocal, isSession, isWebSQL, isIndexDB,
  isObjEmpty, isArrEmpty, isArrEqual, isString,
  isArray,
  isObject,
  isNumber,
  isBoolean,
  isDate,
  isFunction,
  isUndefined,
  isUnll,
  isRegExp,
  isError,
  isSymbol,
  isArrayBuffer,
  isPromise,
  isSet,
  isFalse,
  isTrue, isHasClass, isIdCard, isLAN, isFullscreen,
  isAndroid, isIOS, isMobile, isWeb, isTransverse, isVertical, isTouch, isWebKit, isIE, isSupportWebP
}

/** listener---监听事件 */
import {winResize} from "./listener/winResize";

const listenerMethod: any = {
  winResize
}

/** notify---提示、弹窗 */

const notifyMethod: any = {}

/** number---数字 */
import {numRandom} from "./number/attribute";
import {numFilter, numUppercase} from "./number/format";
import {numPowe, numFactorial, numCumsum} from "./number/reckon";

const numberMethod: any = {
  numRandom, numFilter, numUppercase, numPowe, numFactorial, numCumsum
}

/** object---对象 */
import {objKeys, objValues, objLength} from "./object/attribute";
import {objClone} from "./object/clone";

const objectMethod: any = {
  objKeys, objValues, objLength,
  objClone
}

/** string---字符串 */
import {strLength} from "./string/attribute";
import {strTrim, strChangeCase, strReverse, strPalindrome, strTruncate} from "./string/formart";

const stringMethod: any = {
  strLength,
  strTrim, strChangeCase, strReverse, strPalindrome, strTruncate
}

/** systemOS---系统、环境相关的 */
import {fullscreen, exitFullscreen} from "./systemOS/fullscreen";
import {getKeyName} from "./systemOS/keycode";
import {getNavInfo, getNavType, getWebType, getMobileType} from "./systemOS/navigator";
import {
  getDocInfo,
  offsetWidth,
  offsetHeight,
  clientWidth,
  clientHeight,
  barWidth,
  barHeight
} from "./systemOS/document";
import {
  getWinInfo, outerWidth, outerHeight, innerWidth, innerHeight, taskWidth, taskHeight
} from "./systemOS/window";

const systemOSMethod: any = {
  fullscreen, exitFullscreen, getKeyName, getNavInfo, getNavType, getWebType, getMobileType,
  getDocInfo, offsetWidth, offsetHeight, clientWidth, clientHeight, barWidth, barHeight,
  getWinInfo, outerWidth, outerHeight, innerWidth, innerHeight, taskWidth, taskHeight
}

/** idear-utils导出[直接抛出原方法] */
// cache
export {default as cookie} from "./cache/cookie";
export {default as local} from "./cache/localStorage";
export {default as session} from "./cache/sessionStorage";
export {default as webSQL} from "./cache/webSQL";
// download
export {default as copyTexts} from "./download/copyText";
// function
export {default as idearPromise} from "./function/promise";
// listener
export {default as eventBus} from "./listener/eventBus";
export {default as pubSub} from "./listener/pubSub";
// notify
export {default as browserNotify} from "./notify/browserNotify";
export {default as toast} from "./notify/toast";
// systemOS

/** idear-utils导出[iUitls.xxx] */
const iUitls: any = {
  ...arrMethod,
  ...cacheMethod,
  ...checkMethod,
  ...createMethod,
  ...downloadMethod,
  ...elementMethod,
  ...encryptMethod,
  ...filesMethod,
  ...formatMethod,
  ...functionMethod,
  ...judgeMethod,
  ...listenerMethod,
  ...notifyMethod,
  ...numberMethod,
  ...objectMethod,
  ...stringMethod,
  ...systemOSMethod
}
export default iUitls
