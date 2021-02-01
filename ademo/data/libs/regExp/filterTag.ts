/**
 * 过滤html代码(把<>转换)
 * @param {String} str
 * @return {String}
 */
export default function filterTag(str: string): string {
  str = str.replace(/&/gi, "&amp;");
  str = str.replace(/</gi, "&lt;");
  str = str.replace(/>/gi, "&gt;");
  str = str.replace(" ", " ");
  return str;
}
