import {protoTypeString} from "@idear-utils/config"


/**
 * @desc   给隐私信息标记号加密为*
 * @param  {String} personInfo
 * @param  {Number} left
 * @param  {Number} right
 * @param  {String} replace
 */
const secretInfo = (personInfo: string | number, left = 3, right = 3, replace = '*') => {
  let personInfoData: string = ''
  if (protoTypeString(personInfo) === 'Number') {
    personInfoData = '' + personInfo
  }
  if (protoTypeString(personInfo) !== 'String') {
    throw new Error('参数类型错误')
  }
  if (personInfoData.length < 7) {
    throw new Error('参数长度需要大于7')
  }
  let reg = new RegExp('^([a-zA-Z\\d]{' + left + '})([a-zA-Z\\d]+)([a-zA-Z\\d]{' + right + '})$')
  return personInfoData.replace(reg, function (x, y, z, p) {
    let i = ''
    while (i.length < z.length) {
      i += replace
    }
    return y + i + p
  })
}
