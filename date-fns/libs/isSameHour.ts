import requiredArgs from "../utils/requiredArgs";
import startOfHour from "./startOfHour";

export default function isSameHour(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}
