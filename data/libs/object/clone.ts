import objectAssign from './assign'

/**
 * ## 克隆对象
 * @param {string} obj 目标对象
 * @returns {object}
 */
export default function cloneObject(obj: any): object {
  return objectAssign({}, obj)
}
