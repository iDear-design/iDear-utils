import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function differenceInMilliseconds(
  dirtyDateLeft,
  dirtyDateRight
) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}
