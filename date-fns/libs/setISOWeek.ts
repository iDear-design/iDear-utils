import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";
import toInteger from "../utils/toInteger";
import getISOWeek from "./getISOWeek";

export default function setISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var isoWeek = toInteger(dirtyISOWeek)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}
