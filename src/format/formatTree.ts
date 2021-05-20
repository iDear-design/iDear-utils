/**
 * @description 数组转换成数结构
 * @param {any} tree  要过滤的树结构
 * @param {any} filter 过滤条件，符合条件的节点保留 如：item => item.name.indexOf(filterText) !== -1
 * @returns {any[]}
 */
function arrayToJson(data){
  let result = []
  let map = {}
  if (!Array.isArray(data)) {//验证data是不是数组类型
    return []
  }
  data.forEach(item => {//建立每个数组元素id和该对象的关系
    map[item.id] = item //这里可以理解为浅拷贝，共享引用
  })
  data.forEach(item => {
    let parent = map[item.parentId] //找到data中每一项item的爸爸
    if (parent) {//说明元素有爸爸，把元素放在爸爸的children下面
      (parent.children || (parent.children = [])).push(item)
    } else {//说明元素没有爸爸，是根节点，把节点push到最终结果中
      result.push(item) //item是对象的引用
    }
  })
  return result //数组里的对象和data是共享的
}
