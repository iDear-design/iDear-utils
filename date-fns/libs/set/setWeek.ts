import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";
import toInteger from "../../utils/toInteger";
import getWeek from "../get/getWeek";

export default function setWeek(dirtyDate, dirtyWeek, dirtyOptions) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var week = toInteger(dirtyWeek)
  var diff = getWeek(date, dirtyOptions) - week
  date.setDate(date.getDate() - diff * 7)
  return date
}
