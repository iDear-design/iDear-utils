import {getUserAgent} from "../../utils/getNavigator";
import Agents from "../../utils/dictionary/agents";

// 移动端
export default function isMobile(): Boolean {
  let Mobile = (getUserAgent().toLowerCase()).indexOf(Agents) >= 0
  return Mobile
}
