import {fileRegExp} from "../_base/regExp";

/**
 * @description 判断是否图片
 * @param {string} fileName
 * @return {Boolean}
 */
export const isImage = (fileName: string): boolean => {
  return fileRegExp.img.test(fileName);
}

/**
 * @description 验证是否为视频
 * @param {string} fileName
 * @return {Boolean}
 */
export const isVideo = (fileName: string): boolean => {
  return fileRegExp.video.test(fileName);
}

/**
 * @description 验证是否为文档
 * @param {string} fileName
 * @return {Boolean}
 */
export const isDocument = (fileName: string): boolean => {
  return fileRegExp.document.test(fileName);
}

/**
 * @description 验证是否为文档
 * @param {string} fileName
 * @return {Boolean}
 */
export const isOffice = (fileName: string): boolean => {
  return fileRegExp.office.test(fileName);
}
