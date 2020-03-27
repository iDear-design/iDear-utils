// 判断是否存在localStorage
export default function isLocal() {
  try {
    // in IE8 typeof localStorage.setItem === 'object'
    return (typeof localStorage !== 'undefined' && 'setItem' in localStorage && !!localStorage.setItem)
  } catch (e) {
    return false;
  }
}

