import {replaceFieldConfig} from "../_types";
import {isArray} from "../judge/dataType";

/**
 * @description 树结构过滤名称的默认值
 */
const defultReplaceField: replaceFieldConfig = {
  id: 'id',
  pid: 'pid',
  children: 'children'
}

/**
 * @description 数组转换成树结构
 * @param {Array<any>} arr---要过滤的树结构
 * @param {replaceFieldConfig} replaceField---过滤的名称
 * @returns {Array<any>}
 */
export const ArrayToTree = (arr: Array<any>, replaceField: replaceFieldConfig = defultReplaceField): Array<any> => {
  let treeData = []
  let mapObj = {}
  if (!Array.isArray(arr)) {
    return []
  }
  arr.forEach(item => {
    mapObj[item[replaceField.id]] = item
  })
  arr.forEach(item => {
    let parent = mapObj[item[replaceField.pid]]
    if (parent) {
      (parent[replaceField.children] || (parent[replaceField.children] = [])).push(item)
    } else {
      treeData.push(item)
    }
  })
  return treeData
}

/**
 * @description 树结构转换成数组
 * @param {Array<any>} arr---要过滤的树结构
 * @param {any} replaceField---子节点的名称
 * @returns {Array<any>}
 */
export const TreeToArray = (tree: Array<any>, replaceField: string = 'children'): Array<any> => {
  let arrData = [];
  if (Array.isArray(tree)) {
    for (let i = 0, l = tree.length; i < l; i++) {
      arrData.push(tree[i]);
      if (isArray(tree[i][replaceField]) && tree[i][replaceField].length > 0)
        arrData = arrData.concat(TreeToArray(tree[i][replaceField]));
      delete tree[i][replaceField]
    }
  }
  return arrData;
}
