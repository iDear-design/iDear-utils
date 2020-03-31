/**
 * ## 是否身份证
 * @param {string} idCard 目标值
 * @returns {boolean}
 */
function isIDCard(idCard: string): boolean {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(idCard)) {
    console.error('身份证长度或格式错误!')
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
  let idCity = {
    11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
    21: "辽宁", 22: "吉林", 23: "黑龙江",
    31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
    41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南",
    50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏",
    61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆",
    71: "台湾",
    81: "香港", 82: "澳门",
    91: "国外"
  };
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
    console.error('身份证上的出生日期非法')
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
