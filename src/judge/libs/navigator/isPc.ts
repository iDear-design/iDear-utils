import {getUserAgent} from "@idear-utils/obtain";
import {userAgents} from "@idear-utils/config";

// pc端
export default function isPc(): Boolean {
  let Mobile = (getUserAgent().toLowerCase()).indexOf(userAgents) === -1
  return Mobile
}
