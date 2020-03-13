import requiredArgs from "../utils/requiredArgs";
import startOfSecond from "./startOfSecond";

export default function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}
