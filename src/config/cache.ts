/**
 * @desc 导出localStorage
 * */
export const local: any = localStorage || (window as any).localStorage

/**
 * @desc 导出sessionStorage
 * */
export const session: any = sessionStorage || (window as any).sessionStorage

/**
 * @desc 导出openDatabase
 * */
let database: any = null
// @ts-ignore
database = openDatabase
export const webSQL: any = database || (window as any).openDatabase
