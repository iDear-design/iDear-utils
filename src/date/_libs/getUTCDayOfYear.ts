import toDate from "../toDate";
import requiredArgs from "./requiredArgs";

var MILLISECONDS_IN_DAY = 86400000

export default function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var timestamp = date.getTime()
  date.setUTCMonth(0, 1)
  date.setUTCHours(0, 0, 0, 0)
  var startOfYearTimestamp = date.getTime()
  var difference = timestamp - startOfYearTimestamp
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}
