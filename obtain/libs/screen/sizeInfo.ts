import screenInfo from "./index";

// 返回显示器屏幕的宽度
export const width = screenInfo.width

// 返回显示屏幕的高度
export const height = screenInfo.height

// 返回显示屏幕的宽度 (除 Windows 任务栏之外)
export const availWidth = screenInfo.availWidth

// 返回显示屏幕的高度 (除 Windows 任务栏之外)
export const availHeight = screenInfo.availHeight

// 任务栏宽度
export const taskbarWidth = width - availWidth

// 任务栏高度
export const taskbarHeight = height - availHeight

// 返回目标设备或缓冲器上的调色板的比特深度
export const colorDepth = screenInfo.colorDepth

// 返回显示屏幕的颜色分辨率（比特每像素
export const pixelDepth = screenInfo.pixelDepth
