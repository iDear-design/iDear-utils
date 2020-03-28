import isWebSQL from "../../utils/isWebSQL";

let webSQL: any = null

if (isWebSQL()) {
  // @ts-ignore
  webSQL = openDatabase || (window as any).openDatabase
} else {
  console.error('对不起，您的运行环境不支持WebSQL！')
}

export default webSQL
