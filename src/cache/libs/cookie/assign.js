export default function (target) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}
