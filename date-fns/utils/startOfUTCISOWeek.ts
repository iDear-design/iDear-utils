import toDate from "../libs/toDate";
import requiredArgs from "./requiredArgs";

export default function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments)

  var weekStartsOn = 1
  var date = toDate(dirtyDate)
  var day = date.getUTCDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
}
