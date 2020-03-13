import requiredArgs from "../utils/requiredArgs";
import isSameISOWeek from "./isSameISOWeek";

export default function isThisISOWeek(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameISOWeek(dirtyDate, Date.now())
}
