import isLocal from "../../utils/isLocal";

let local: any = null

if (isLocal()) {
  local = localStorage || (window as any).localStorage
} else {
  console.error('对不起，您的运行环境不支持localStorage！')
}

export default local
