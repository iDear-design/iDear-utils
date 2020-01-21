import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function differenceInMilliseconds(
  dirtyDateLeft,
  dirtyDateRight
) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}
