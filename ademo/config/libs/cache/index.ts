/**
 * 导出localStorage
 * */
const local: any = localStorage || (window as any).localStorage

/**
 * 导出sessionStorage
 * */
const session: any = sessionStorage || (window as any).sessionStorage

/**
 * 导出openDatabase
 * */
let database: any = null
// @ts-ignore
database = openDatabase
const webSQL: any = database || (window as any).openDatabase

export default {
  local,
  session,
  webSQL
}
