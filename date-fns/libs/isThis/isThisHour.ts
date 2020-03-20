import requiredArgs from "../../utils/requiredArgs";
import isSameHour from "../isSame/isSameHour";

export default function isThisHour(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameHour(Date.now(), dirtyDate)
}
