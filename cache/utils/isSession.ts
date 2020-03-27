// 判断是否存在sessionStorage
export default function isSession() {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof sessionStorage !== 'undefined' && 'setItem' in sessionStorage && !!sessionStorage.setItem)
  } catch (e) {
    return false;
  }
}

