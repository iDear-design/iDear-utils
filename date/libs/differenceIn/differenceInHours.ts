import differenceInMilliseconds from "./differenceInMilliseconds";
import requiredArgs from "../../utils/requiredArgs";

var MILLISECONDS_IN_HOUR = 3600000

export default function differenceInHours(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var diff =
    differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) /
    MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
