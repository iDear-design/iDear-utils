import {getUserAgent} from "../../utils/getNavigator";

// ios终端
export default function isIOS(): Boolean {
  let iOS = !!getUserAgent().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return iOS
}

