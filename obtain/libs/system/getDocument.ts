import {doc} from "@idear-tools/config"

const bodyInfo = (doc.compatMode && doc.compatMode == 'CSS1Compat') ? doc.documentElement : doc.body;

// body总宽
export const offsetWidth = bodyInfo.offsetWidth

// body总高度
export const offsetHeight = bodyInfo.offsetHeight

// body展示的宽度；表示body在浏览器内显示的区域宽度
export const clientWidth = bodyInfo.clientWidth

// body展示的高度；表示body在浏览器内显示的区域高度
export const clientHeight = bodyInfo.clientHeight

// 任务栏宽度
export const taskbarWidth = offsetWidth - clientWidth

// 任务栏高度
export const taskbarHeight = offsetHeight - clientHeight

export default bodyInfo
