import {local} from "@idear-tools/config";

/**
 * 判断是否支持localStorage
 * @returns {boolean}
 * */
export default function isLocal(): boolean {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof local !== 'undefined' && 'setItem' in local && !!local.setItem)
  } catch (e) {
    return false;
  }
}

