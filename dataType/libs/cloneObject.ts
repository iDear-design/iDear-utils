import assign from '../utils/assign'

export default function cloneObject(dirtyObject) {
  return assign({}, dirtyObject)
}
