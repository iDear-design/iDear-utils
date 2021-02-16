/**
 * @desc 克隆对象
 * @param {string} obj 目标对象
 * @returns {object}
 */
export const objClone = (obj: object): object => {
  let target: object = {}
  if (target == null) {
    throw new TypeError(
      'assign requires that input parameter not be null or undefined'
    )
  }
  obj = obj || {}
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      target[property] = obj[property]
    }
  }
  return target
}
