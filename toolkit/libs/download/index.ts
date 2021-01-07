/**
 * ## 创建A标签下载
 * @param {string} url: 下载地址
 * @param {string} title: 下载标题
 * @param {string} target: 窗口位置（默认新开窗口）
 * @returns {any}
 */
export function tagAToDownload(fileurl: string, title: string = '', target: string = '_blank') {
  let tagA = (document as any).createElement('a')
  tagA.setAttribute('href', fileurl)
  tagA.setAttribute('download', title)
  tagA.setAttribute('target', target)
  (document as any).body.appendChild(tagA)
  tagA.click()
  (document as any).body.removeChild(tagA)
}
