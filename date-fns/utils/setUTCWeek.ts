import toDate from "../toDate";
import toInteger from "./toInteger";
import getUTCWeek from "./getUTCWeek";
import requiredArgs from "./requiredArgs";

export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var week = toInteger(dirtyWeek)
  var diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
