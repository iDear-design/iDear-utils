import {getUserAgent} from "../../utils/getNavigator";
import {userAgents} from "@idear-tools/config";

// pc端
export default function isPc(): Boolean {
  let Mobile = (getUserAgent().toLowerCase()).indexOf(userAgents) === -1
  return Mobile
}
