import {numPowe} from "../number/reckon";

/**
 * @description 文件大小转换为MB GB KB格式
 * @param {Object} size
 * @param {Object} fixed 保留几位小数
 */
export function countFileSize(size: number, fixed: number = 2): string {
  let fileSize: string = '0B';
  if (fixed < 0) {
    console.error('fixed必须为正整数！')
    return fileSize
  }
  if (size < numPowe(1024, 1)) {
    fileSize = size.toFixed(fixed) + "B";
  } else if (size < numPowe(1024, fixed)) {
    fileSize = (size / numPowe(1024, 1)).toFixed(fixed) + "KB";
  } else if (size < numPowe(1024, 3)) {
    fileSize = (size / numPowe(1024, 2)).toFixed(fixed) + "MB";
  } else if (size < numPowe(1024, 4)) {
    fileSize = (size / numPowe(1024, 3)).toFixed(fixed) + "GB";
  } else if (size < numPowe(1024, 5)) {
    fileSize = (size / numPowe(1024, 4)).toFixed(fixed) + "TB";
  }
  return fileSize;
}
