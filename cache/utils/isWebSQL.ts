// 判断是否支持WebSQL
// declare var openDatabase: any
export default function isWebSQL() {
  // @ts-ignore
  let openDatabaseFun = openDatabase || (window as any).openDatabase
  return typeof openDatabaseFun === 'function';
}

