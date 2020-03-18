import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function isLeapYear(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
