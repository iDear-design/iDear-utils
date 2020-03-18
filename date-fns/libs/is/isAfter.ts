import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}
