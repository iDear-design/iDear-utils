import requiredArgs from "../utils/requiredArgs";
import startOfMinute from "./startOfMinute";

export default function isSameMinute(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}
