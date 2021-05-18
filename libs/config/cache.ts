/**
 * @description 导出localStorage
 * */
export const LOCAL: any = localStorage || (window as any).localStorage

/**
 * @description 导出sessionStorage
 * */
export const SESSION: any = sessionStorage || (window as any).sessionStorage

/**
 * @description 导出openDatabase
 * */
let database: any = null
// @ts-ignore
database = openDatabase
export const WEBSQL: any = database || (window as any).openDatabase
