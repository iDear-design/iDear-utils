import {getUserAgent} from "../../utils/getNavigator";
import Agents from "../../utils/dictionary/agents";

// pc端
export default function isPc(): Boolean {
  let Mobile = (getUserAgent().toLowerCase()).indexOf(Agents) === -1
  return Mobile
}
