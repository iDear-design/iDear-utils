import requiredArgs from "../utils/requiredArgs";
import isSameSecond from "./isSameSecond";

export default function isThisSecond(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameSecond(Date.now(), dirtyDate)
}
