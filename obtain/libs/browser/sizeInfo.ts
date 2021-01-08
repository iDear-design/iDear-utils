const winInfo = window || (window as any)

// 浏览器高度
export const outerHeight = winInfo.outerHeight

// 浏览器宽度
export const outerWidth = winInfo.outerWidth

// 浏览器内页面可用高度；此高度包含了水平滚动条的高度(若存在)。可表示为浏览器当前高度去除浏览器边框、工具条后的高度
export const innerHeight = winInfo.innerHeight

// 浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。可表示为浏览器当前宽度去除浏览器边框后的宽度
export const innerWidth = winInfo.innerWidth

// 任务栏宽度
export const taskbarWidth = outerWidth - innerWidth

// 任务栏高度
export const taskbarHeight = outerHeight - innerHeight
