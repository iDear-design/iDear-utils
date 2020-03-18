import requiredArgs from "../utils/requiredArgs";
import isSameWeek from "./isSameWeek";

export default function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  return isSameWeek(dirtyDateLeft, dirtyDateRight, { weekStartsOn: 1 })
}
