import {isIdCard} from "../judge/idCard";
import idCardCityData from "../config/idCard";

/**
 * @description 身份证城市
 * @param {string} idCard 目标值
 * @returns {string}
 */
export const idCardCity = (idCard: string): string => {
  if (!isIdCard(idCard)) return
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
 * @description 身份证出生日期验证
 * @param {string} idCard 目标值
 * @returns {string}
 */
export const idCardBirthday = (idCard: string): string => {
  if (!isIdCard(idCard)) return
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
