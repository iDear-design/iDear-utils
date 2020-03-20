import requiredArgs from "../../utils/requiredArgs";
import isSameMonth from "../isSame/isSameMonth";

export default function isThisMonth(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameMonth(Date.now(), dirtyDate)
}
