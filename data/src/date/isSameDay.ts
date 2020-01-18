import startOfDay from "./startOfDay";
import requiredArgs from "./_libs/requiredArgs";

export default function isSameDay(dirtyDateLeft: Date | number, dirtyDateRight: Date | number): boolean {
  requiredArgs(2, arguments)

  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}
