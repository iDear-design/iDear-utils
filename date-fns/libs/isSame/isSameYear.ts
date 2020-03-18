import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function isSameYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}
