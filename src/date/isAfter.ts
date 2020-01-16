import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}
