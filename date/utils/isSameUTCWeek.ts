import startOfUTCWeek from "./startOfUTCWeek";
import requiredArgs from "./requiredArgs";

export default function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  requiredArgs(2, arguments)

  var dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options)
  var dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
