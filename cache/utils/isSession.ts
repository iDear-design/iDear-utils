// 判断是否支持sessionStorage
export default function isSession() {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof sessionStorage !== 'undefined' && 'setItem' in sessionStorage && !!sessionStorage.setItem)
  } catch (e) {
    return false;
  }
}

