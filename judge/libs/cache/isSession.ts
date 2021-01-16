import {session} from "@idear-tools/config";

/**
 * 判断是否支持sessionStorage
 * @returns {boolean}
 * */
export default function isSession(): boolean {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof session !== 'undefined' && 'setItem' in session && !!session.setItem)
  } catch (e) {
    return false;
  }
}

