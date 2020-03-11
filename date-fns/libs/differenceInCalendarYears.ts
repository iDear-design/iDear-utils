import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function differenceInCalendarYears(
  dirtyDateLeft,
  dirtyDateRight
) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  return dateLeft.getFullYear() - dateRight.getFullYear()
}
