import {idCardCityData, regExp} from "@idear-tools/config"

/**
 * ## 是否身份证
 * @param {string} idCard 目标值
 * @returns {boolean}
 */
function isIDCard(idCard: string): boolean {
  if (!regExp.idCard.test(idCard)) {
    console.error('身份证号码出错!')
    return false
  } else {
    return true
  }
}

/**
 * ## 身份证城市
 * @param {string} idCard 目标值
 * @returns {string}
 */
function idCardCity(idCard: string): string {
  if (!isIDCard(idCard)) return
  let idCity = idCardCityData;
  let catyName = idCity[parseInt(idCard.substr(0, 2))]
  if (!catyName) {
    console.error('没有找到身份证地区!')
    return ''
  } else {
    return catyName
  }
}

/**
 * ## 身份证出生日期验证
 * @param {string} idCard 目标值
 * @returns {string}
 */
function idCardBirthday(idCard: string): string {
  if (!isIDCard(idCard)) return
  let Birth = (idCard.substr(6, 4) +
    "-" + Number(idCard.substr(10, 2)) +
    "-" + Number(idCard.substr(12, 2)))
    .replace(/-/g, "/")
  let days = new Date(Birth)
  let Birthday = (days.getFullYear() + "/" + (days.getMonth() + 1) + "/" + days.getDate())
  if (Birth != Birthday) {
    console.error('身份证上的出生日期错误')
    return ''
  } else {
    return Birthday
  }
}

/**
 * ## 身份证号码校验
 * @param {string} idCard 目标值
 * @returns {boolean}
 */
function idCardRegExp(idCard: string): boolean {
  if (!isIDCard(idCard)) return
  let sum = 0
  let weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let codes = '10X98765432'
  let idCardArr: any[] = idCard.split('')
  for (let i = 0; i < idCardArr.length - 1; i++) {
    sum += Number(idCardArr[i]) * weights[i];
  }
  let last = codes[sum % 11]; // 计算出来的最后一位身份证号码
  if (idCardArr[idCardArr.length - 1] != last) {
    console.error('这不是一个身份证号')
    return false
  } else {
    return true
  }
}
