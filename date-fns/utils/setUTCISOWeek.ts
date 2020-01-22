import toDate from "../libs/toDate";
import toInteger from "./toInteger";
import getUTCISOWeek from "./getUTCISOWeek";
import requiredArgs from "./requiredArgs";

export default function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var isoWeek = toInteger(dirtyISOWeek)
  var diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
