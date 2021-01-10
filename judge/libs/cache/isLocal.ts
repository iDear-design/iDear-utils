// 判断是否支持localStorage
export default function isLocal() {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof localStorage !== 'undefined' && 'setItem' in localStorage && !!localStorage.setItem)
  } catch (e) {
    return false;
  }
}

