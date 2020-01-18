import assign from "./_libs/assign";

export default function cloneObject(dirtyObject) {
  return assign({}, dirtyObject)
}
