import {DOC, WIN} from "../_base/system";

/**
 * @description 根据地址下载文件
 * @param {string} url: 下载地址
 * @param {string} fileName: 下载标题
 * @param {string} target: 窗口位置（默认新开窗口）
 * @returns {any}
 */
export const urlDownload = (url: string, fileName: string = 'urlFile', target: string = '_blank') => {
  let link = DOC.createElement('a')
  link.style.display = 'none';
  link.href = url
  link.download = fileName;
  link.target = target;
  DOC.body.appendChild(link)
  link.click()
  DOC.body.removeChild(link)
}


/**
 * @description 根据文件流下载文件
 * @param {Blob} data: 下载地址
 * @param {string} fileName: 下载文件名称[带后缀]
 * @param {string} target: 窗口位置（默认新开窗口）
 * @returns {any}
 */
export const filesDownload = (data: Blob, fileName: string, target: string = '_blank') => {
  const link = DOC.createElement('a');
  link.style.display = 'none';
  link.href = WIN.URL.createObjectURL(data);
  link.download = fileName;
  link.target = target;
  DOC.body.appendChild(link)
  link.click();
  DOC.body.removeChild(link);
}
