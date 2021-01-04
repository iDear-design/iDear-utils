import requiredArgs from "../../utils/requiredArgs";
import isSameMinute from "../isSame/isSameMinute";

export default function isThisMinute(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameMinute(Date.now(), dirtyDate)
}
