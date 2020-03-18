import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import toDate from "./toDate";
import getDaysInMonth from "./get/getDaysInMonth";

export default function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var month = toInteger(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}
