import {doc} from "../_libs/config/system";

var copyElem: HTMLTextAreaElement

/**
 * @description 创建剪贴板
 * @param {String} content 复制的内容
 */
const handleText = (content: string | number) => {
  if (!copyElem) {
    copyElem = doc.createElement('textarea')
    copyElem.id = '$iDearCopy'
    let styles = copyElem.style
    styles.width = '48px'
    styles.height = '24px'
    styles.position = 'fixed'
    styles.zIndex = '0'
    styles.left = '-500px'
    styles.top = '-500px'
    doc.body.appendChild(copyElem)
  }
  copyElem.value = content === null || content === undefined ? '' : ('' + content)
}


/**
 * @description 复制内容到剪贴板
 * @param {String} content 复制的内容
 */
export const copyText = (content: string | number): boolean => {
  let result = false
  try {
    handleText(content)
    copyElem.select()
    copyElem.setSelectionRange(0, copyElem.value.length)
    result = doc.execCommand('copy')
  } catch (err: any) {
    console.error('复制内容失败【浏览器不支持】:' + err)
  }
  return result
}

const copyTexts: Function = copyText

export default copyTexts
