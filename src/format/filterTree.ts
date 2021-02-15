/**
 * @desc 树结构的删选、过虑：不包含父节点
 * @param {any} tree  要过滤的树结构
 * @param {any} filter 过滤条件，符合条件的节点保留 如：item => item.name.indexOf(filterText) !== -1
 * @returns {any[]}
 */
export const filterTree = (tree: any[], filter: Function): any[] => {
  if (!(tree && tree.length)) return []
  let newChildren: any[] = []
  for (const item of tree) {
    if (filter(item)) {
      // 如果节点符合条件，直接加入新的节点集
      newChildren.push(item)
      if (item.children) item.children = filterTree(item.children, filter)
    } else {
      // 如果当前节点不符合条件，递归过滤子节点，
      // 把符合条件的子节点提升上来，并入新节点集
      if (item.children) newChildren.push(...filterTree(item.children, filter))
    }
  }
  return newChildren
}

/**
 * @desc 树结构的删选、过虑：包含父节点
 * @param {any} tree 要过滤的树结构
 * @param {any} filter 过滤条件，符合条件的节点保留 如：item => item.name.indexOf(filterText) !== -1
 * @returns {any[]}
 */
export const filterTreeWith = (tree: any[], filter: Function): any[] => {
  if (!(tree && tree.length)) return []
  let newChildren: any[] = []
  for (const item of tree) {
    const children = filterTreeWith(item.children, filter);
    // 以下两个条件任何一个成立，当前节点都应该加入到新子节点集中
    // 1. 子孙节点中存在符合条件的，即 children 数组中有值
    // 2. 自己本身符合条件
    if ((children && children.length) || filter(item)) {
      item.children = children;
      newChildren.push(item);
    }
  }
  return newChildren
}
