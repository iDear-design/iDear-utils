import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  return (
    dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
  )
}
