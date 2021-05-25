import {changeCaseConfig, trimStringConfig} from "../_types";
import {isStrEmpty} from "../judge/dataEmpty";

/** @description 字符串的格式化 */

/**
 * ## 去除空格
 * @param {string} str 目标字符串
 * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {string}
 */
export const strTrimType = (str: string, type?: trimStringConfig): string => {
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '');
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '');
    case 3:
      return str.replace(/(^\s*)/g, '');
    case 4:
      return str.replace(/(\s*$)/g, '');
    default:
      return str;
  }
}

/**
 * ## 去除前后空格
 * @param {string} str 目标字符串
 * @returns {string}
 */

export const strTrim = (str: string): string => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * @description 提还字母大小写
 * @param  {string} str 目标字符串
 * @param  {number} type 1-首字母大写  2-首页母小写  3-大小写转换  4-全部大写  5-全部小写
 * @returns {string}
 */
export const strChangeCase = (str: string, type: changeCaseConfig): string => {
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str.split("").map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase();
        }
      }).join("");
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

/**
 * @description 生成一个倒序的字符串
 * @param  {string} str 目标字符串
 * @returns {string}
 */
export const strReverse = (str: string): string => {
  // return str.split('').reverse().join('')
  // return [...str].reverse().join('')
  return Array.from(str).reverse().join('')
}

/**
 * @description 字符串是否是回文: 如果给定的字符串是回文，则返回 true ；否则返回 false
 * @param  {string} str 目标字符串
 * @returns {boolean}
 */
export const strPalindrome = (str: string): boolean => {
  return str === strReverse(str)
}

/**
 * @description 截取字符串: 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
 * @param  {string} str 目标字符串
 * @param  {number} num 字符串限定长度
 * @param  {string} truncate 超出的展示形式
 * @returns {string}
 */
export const strTruncate = (str: string, num: number, truncate: string = '...'): string => {
  return str.length > num ? str.slice(0, num) + truncate : str
}

/**
 * @description 替换字符串中所有指定字符
 * @param {string} str 内容
 * @param {string} beforeStr 需要替换字符
 * @param {string} afterStr 替换成的字符
 * @returns {(string)}
 */
export const strReplaceAll = (str: string, beforeStr: string, afterStr: string = '...'): string => {
  return str.replace(new RegExp(beforeStr, 'gm'), afterStr);
}

/**
 * @description 过滤html操作符(防XSS)
 * @param {string} str 目标字符串
 * @returns {string}
 */
export const strFilterHtmlCode = (str: string): string => {
  const temp = {
    '<': '&lt;',
    '>': '&gt',
    '&': '&amp;',
    '(': '&#40;',
    ')': '&#41;',
    ' ': '&nbsp;',
    '"': '&quot;',
    '\'': "&#39;"
  };
  return str.replace(/[<>&|() '"]/g, (chr: string) => {
    return temp[chr];
  });
};

/**
 * @description 压缩相同且连续的字母字符
 * @param {string} str 目标字符串
 * @param {boolean} ignoreCase 是否区分大小写
 * @returns {string} bbbssss => 3b4s
 */
export const strCompressRepeatedStr = (str: string, ignoreCase: boolean = true): string => {
  let regex = new RegExp("([a-z])\\1+", ignoreCase ? "gi" : "g");
  return str.replace(regex, function (strs: string, group: string) {
    return strs.length + group;
  });
};

/**
 * @description 中文转Unicode码
 * @param {string} str
 * @returns {string}
 */
export const strToUnicode = (str: string): string => {
  if (!isStrEmpty(str)) {
    return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
  } else {
    return str;
  }
};

/**
 * @description Unicode码转中文
 * @param {string} str
 * @returns {string}
 */
export const strToGB2312 = (str: string): string => {
  if (!isStrEmpty(str)) {
    return unescape(str.replace(/\\u/gi, '%u'));
  } else {
    return str;
  }
};
