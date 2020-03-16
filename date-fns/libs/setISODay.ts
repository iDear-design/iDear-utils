import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";
import toInteger from "../utils/toInteger";
import getISODay from "./getISODay";
import addDays from "./addDays";

export default function setISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var day = toInteger(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}
