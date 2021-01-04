import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyLeftDate)
  var dateRight = toDate(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}
