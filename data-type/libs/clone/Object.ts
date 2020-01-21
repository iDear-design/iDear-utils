import assign from '../../utils/assign'

export default function cloneObject(dirtyObject: any) {
  return assign({}, dirtyObject)
}
