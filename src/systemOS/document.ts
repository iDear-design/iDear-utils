import {doc} from "../../libs/config/system";

/**
 * @description 获取body的信息
 */
const bodyInfo: any = (doc.compatMode && doc.compatMode == 'CSS1Compat') ? doc.documentElement : doc.body;

/**
 * @description body总宽
 */
export const offsetWidth = bodyInfo.offsetWidth

/**
 * @description body总高度
 */
export const offsetHeight = bodyInfo.offsetHeight

/**
 * @description body展示的宽度；表示body在浏览器内显示的区域宽度
 */
export const clientWidth = bodyInfo.clientWidth

/**
 * @description body展示的高度；表示body在浏览器内显示的区域高度
 */
export const clientHeight = bodyInfo.clientHeight

/**
 * @description 任务栏宽度
 */
export const taskbarWidth = offsetWidth - clientWidth

/**
 * @description 任务栏高度
 */
export const taskbarHeight = offsetHeight - clientHeight

/**
 * @description 获取document常用信息
 * @return {Object}
 */
export const getDocInfo = () => {
  let docInfo: any = {
    offsetWidth: offsetWidth,
    offsetHeight: offsetHeight,
    clientWidth: clientWidth,
    clientHeight: clientHeight,
    taskbarWidth: taskbarWidth,
    taskbarHeight: taskbarHeight
  }
  return docInfo
}
