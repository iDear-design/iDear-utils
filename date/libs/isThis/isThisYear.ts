import requiredArgs from "../../utils/requiredArgs";
import isSameYear from "../isSame/isSameYear";

export default function isThisYear(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameYear(dirtyDate, Date.now())
}
