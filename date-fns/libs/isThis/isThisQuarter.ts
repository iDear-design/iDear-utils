import requiredArgs from "../../utils/requiredArgs";
import isSameQuarter from "../isSame/isSameQuarter";

export default function isThisQuarter(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameQuarter(Date.now(), dirtyDate)
}
