import differenceInMilliseconds from "./differenceInMilliseconds";
import requiredArgs from "../utils/requiredArgs";

var MILLISECONDS_IN_MINUTE = 60000

export default function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var diff =
    differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) /
    MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
