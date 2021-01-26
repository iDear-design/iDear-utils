import {getUserAgent} from "@idear-utils/obtain";
import {userAgents} from "@idear-utils/config";

// 移动端
export default function isMobile(): Boolean {
  let Mobile = (getUserAgent().toLowerCase()).indexOf(userAgents) >= 0
  return Mobile
}
