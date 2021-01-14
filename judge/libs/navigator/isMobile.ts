import {getUserAgent} from "../../utils/getNavigator";
import {userAgents} from "@idear-tools/config";

// 移动端
export default function isMobile(): Boolean {
  let Mobile = (getUserAgent().toLowerCase()).indexOf(userAgents) >= 0
  return Mobile
}
