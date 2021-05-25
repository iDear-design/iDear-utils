/** @description 文件的基本信息：（如大小、后缀、名称...） */

/**
 * @description 获取文件后缀
 * @param  {string} file
 * @return {number}
 */
export const fileExt = (files: string): string => {
  if (files.lastIndexOf(".") == -1) return files;
  let ext = files.lastIndexOf(".") + 1;
  return files.substring(ext, files.length)
}

/**
 * @description 获取文件名称
 * @param  {string} files
 * @return {number}
 */
export const fileName = (files: string): string => {
  let ext = files.lastIndexOf(".");
  if (ext == -1) return files;
  else return files.substring(ext, files.length);
}
