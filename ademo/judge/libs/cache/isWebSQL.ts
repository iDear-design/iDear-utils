import {win} from "@idear-utils/config";

/**
 * 判断是否支持WebSQL
 * @returns {boolean}
 * */
export default function isWebSQL(): boolean {
  // @ts-ignore
  let openDatabaseFun = openDatabase || win.openDatabase
  return typeof openDatabaseFun === 'function';
}

