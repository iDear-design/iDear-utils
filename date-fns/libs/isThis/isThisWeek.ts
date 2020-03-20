import requiredArgs from "../../utils/requiredArgs";
import isSameWeek from "../isSame/isSameWeek";

export default function isThisWeek(dirtyDate, options) {
  requiredArgs(1, arguments)

  return isSameWeek(dirtyDate, Date.now(), options)
}
