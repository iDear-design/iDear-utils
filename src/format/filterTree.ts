/**
 * @description 树结构的删选、过虑：不包含父节点
 * @param {any} tree  要过滤的树结构
 * @param {any} filter 过滤条件，符合条件的节点保留 如：item => item.name.indexOf(filterText) !== -1
 * @param {any} replaceField---子节点的名称
 * @returns {any[]}
 */
export const filterTree = (tree: any[], filter: Function, replaceField: string = 'children'): any[] => {
  if (!(tree && tree.length)) return []
  let newChildren: any[] = []
  for (const item of tree) {
    if (filter(item)) {
      newChildren.push(item)
      if (item[replaceField]) item[replaceField] = filterTree(item[replaceField], filter, replaceField)
    } else {
      if (item[replaceField]) newChildren.push(...filterTree(item[replaceField], filter, replaceField))
    }
  }
  return newChildren
}

/**
 * @description 树结构的删选、过虑：包含父节点
 * @param {any} tree 要过滤的树结构
 * @param {any} filter 过滤条件，符合条件的节点保留 如：item => item.name.indexOf(filterText) !== -1
 * @param {any} replaceField---子节点的名称
 * @returns {any[]}
 */
export const filterTreeWith = (tree: any[], filter: Function, replaceField: string = 'children'): any[] => {
  if (!(tree && tree.length)) return []
  let newChildren: any[] = []
  for (const item of tree) {
    const children = filterTreeWith(item[replaceField], filter, replaceField);
    if ((children && children.length) || filter(item)) {
      item[replaceField] = children;
      newChildren.push(item);
    }
  }
  return newChildren
}
