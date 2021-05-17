/** @description 数字格式化操作 */

/**
 * @description 数字超过xx显示xx+
 * @param {number} num 目标数字
 * @param {number} maxNum 超过的数字
 * @param {string} numType 超过目标数字显示的字符
 * @returns {string | number}
 */
export const filter = (num: number = 0, maxNum: number = 0, numType: string = '+'): string | number => {
  if (num > maxNum) {
    return maxNum + numType
  } else {
    return num
  }
}


/**
 * @description 现金额转大写
 * @param  {Number} 现金额
 * @return {String}
 */
export const uppercase = (num: number): string => {
  let fraction = ['角', '分'];
  let digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  let unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  let head = num < 0 ? '欠' : '';
  num = Math.abs(num);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j++) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}
