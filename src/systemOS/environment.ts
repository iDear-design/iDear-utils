import {getDocInfo} from "./document";
import {getNavInfo} from "./navigator";
import {getWinInfo} from "./window";

/**
 * @description 获取当前运行环境的相关信息
 * @return {Object}
 */
export const getEnvironment = () => {
  let environment: any = {
    document: getDocInfo(),
    browser: getNavInfo(),
    window: getWinInfo()
  }
  return environment
}
