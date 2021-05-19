/** array---数组 */
import {arrLength} from "./src/array/attribute";
import {arrIndexOf, arrLastIndexOf} from "./src/array/find";
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
} from "./src/array/format";
import {arrStaNum} from "./src/array/reckon";
import {arrBubble, arrSelect, arrInsert} from "./src/array/sort";

const arrMethod = {
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
} from "./src/cache/cookie";
import {
  setLocal,
  getLocal,
  removeLocal,
  cleanLocal,
  localKey,
  localLength
} from "./src/cache/localStorage";
import {
  setSession,
  getSession,
  removeSession,
  cleanSession,
  sessionKey,
  sessionLength
} from "./src/cache/sessionStorage";

const cacheMethod = {
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
import {idCardCity, idCardBirthday} from "./src/check/idCard";
import {pwdStrength} from "./src/check/password";
import {regexpType, regexpCheck} from "./src/check/regexpType";

const checkMethod = {
  idCardCity, idCardBirthday, pwdStrength, regexpType, regexpCheck
}

/** create---创建、生成 */
import {createUuid} from "./src/create/uuid";
import {randomColor, randomNum} from "./src/create/random";

const createMethod = {
  createUuid, randomColor, randomNum
}

/** download---下载、导出、复制、克隆 */
import {copyText} from "./src/download/copyText";
import {deepClone} from "./src/download/deepClone";
import {urlDownload, filesDownload} from "./src/download/downLoad";

const downloadMethod = {
  copyText, deepClone, urlDownload, filesDownload
}

/** element---element相关 */
import {addClass, removeClass} from "./src/element/class";
import {getScrollTop, setScrollTop, scrollTo, scrollOffset} from "./src/element/scroll";

const elementMethod = {
  addClass, removeClass, getScrollTop, setScrollTop, scrollTo, scrollOffset
}


/** files---文件相关 */
import {secretInfo} from "./src/encrypt/secretInfo";

const encryptMethod = {
  secretInfo
}

/** files---文件相关 */
import {groupPicture} from "./src/files/picture";
import {countFileSize} from "./src/files/format";

const filesMethod = {
  groupPicture, countFileSize
}

/** format---相关的格式化 */
import {filterTree, filterTreeWith} from "./src/format/filterTree";
import {getQuery, setQuery} from "./src/format/urlQuery";

const formatMethod = {
  filterTree, filterTreeWith,
  getQuery, setQuery
}

/** function---函数、方法 */
import {funCompose, funPipe} from "./src/function/runOrder";

const functionMethod = {
  funCompose, funPipe
}

/** judge---判断 */
import {isLocal, isSession, isWebSQL, isIndexDB} from "./src/judge/cache";
import {isObjEmpty, isArrEmpty} from "./src/judge/dataEmpty";
import {isArrEqual} from "./src/judge/dataEqual";
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
} from "./src/judge/dataType";
import {isHasClass} from "./src/judge/element";
import {isIdCard} from "./src/judge/idCard";
import {isLAN} from "./src/judge/network";
import {isFullscreen} from "./src/judge/screen";
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
} from "./src/judge/systemOS";

const judgeMethod = {
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
import {winResize} from "./src/listener/winResize";

const listenerMethod = {
  winResize
}

/** notify---提示、弹窗 */

const notifyMethod = {}

/** number---数字 */
import {numRandom} from "./src/number/attribute";
import {numFilter, numUppercase} from "./src/number/format";
import {numPowe, numFactorial, numCumsum} from "./src/number/reckon";

const numberMethod = {
  numRandom, numFilter, numUppercase, numPowe, numFactorial, numCumsum
}

/** object---对象 */
import {objKeys, objValues, objLength} from "./src/object/attribute";
import {objClone} from "./src/object/clone";

const objectMethod = {
  objKeys, objValues, objLength,
  objClone
}

/** string---字符串 */
import {strLength} from "./src/string/attribute";
import {strTrim, strChangeCase, strReverse, strPalindrome, strTruncate} from "./src/string/formart";

const stringMethod = {
  strLength,
  strTrim, strChangeCase, strReverse, strPalindrome, strTruncate
}

/** systemOS---系统、环境相关的 */
import {fullscreen, exitFullscreen} from "./src/systemOS/fullscreen";
import {getKeyName} from "./src/systemOS/keycode";
import {getNavInfo, getNavType, getWebType, getMobileType} from "./src/systemOS/navigator";
import {
  getDocInfo,
  offsetWidth,
  offsetHeight,
  clientWidth,
  clientHeight,
  barWidth,
  barHeight
} from "./src/systemOS/document";
import {
  getWinInfo, outerWidth, outerHeight, innerWidth, innerHeight, taskWidth, taskHeight
} from "./src/systemOS/window";

const systemOSMethod = {
  fullscreen, exitFullscreen, getKeyName, getNavInfo, getNavType, getWebType, getMobileType,
  getDocInfo, offsetWidth, offsetHeight, clientWidth, clientHeight, barWidth, barHeight,
  getWinInfo, outerWidth, outerHeight, innerWidth, innerHeight, taskWidth, taskHeight
}

/** idear-utils导出[直接抛出原方法] */
// cache
export {default as cookie} from "./src/cache/cookie";
export {default as local} from "./src/cache/localStorage";
export {default as session} from "./src/cache/sessionStorage";
export {default as webSQL} from "./src/cache/webSQL";
// download
export {default as copyTexts} from "./src/download/copyText";
// function
export {default as idearPromise} from "./src/function/promise";
// listener
export {default as eventBus} from "./src/listener/eventBus";
export {default as pubSub} from "./src/listener/pubsub";
// notify
export {default as browserNotify} from "./src/notify/browserNotify";
export {default as toast} from "./src/notify/toast";
// systemOS

/** idear-utils导出[iUitls.xxx] */
const iUitls = {
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
