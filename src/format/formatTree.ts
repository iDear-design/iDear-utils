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
 * @param {string|number} parentId---要过滤的树结构
 * @param {replaceFieldConfig} replaceField---过滤的名称
 * @returns {Array<any>}
 */
export const ArrayToTree = (arr: Array<any>, parentId: string | number, replaceField: replaceFieldConfig = defultReplaceField): Array<any> => {
  let treeData = []
  for (let i = 0; i < arr.length; i++) {
    let node = arr[i]
    if (node[replaceField.pid] === parentId) {
      let newNode = {...node};
      newNode[replaceField.children] = ArrayToTree(arr, node[replaceField.id], replaceField)
      treeData.push(newNode)
    }
  }
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
