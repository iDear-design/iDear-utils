import isSession from "../../utils/isSession";

let session: any = null

if (isSession()) {
  session = sessionStorage || (window as any).sessionStorage
} else {
  console.error('对不起，您的运行环境不支持localStorage！')
}

export default session
