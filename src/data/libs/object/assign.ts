export default function objectAssign(target: object, dirtyObject: object) {
  if (target == null) {
    throw new TypeError(
      'assign requires that input parameter not be null or undefined'
    )
  }
  dirtyObject = dirtyObject || {}
  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property]
    }
  }
  return target
}
