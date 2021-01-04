import requiredArgs from "../../utils/requiredArgs";
import isSameSecond from "../isSame/isSameSecond";

export default function isThisSecond(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameSecond(Date.now(), dirtyDate)
}
