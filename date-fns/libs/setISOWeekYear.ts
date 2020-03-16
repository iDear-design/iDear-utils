import toInteger from "../utils/toInteger";
import toDate from "./toDate";
import startOfISOWeekYear from "./startOfISOWeekYear";
import differenceInCalendarDays from "./differenceInCalendarDays";
import requiredArgs from "../utils/requiredArgs";

export default function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var isoWeekYear = toInteger(dirtyISOWeekYear)
  var diff = differenceInCalendarDays(date, startOfISOWeekYear(date))
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOWeekYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}
