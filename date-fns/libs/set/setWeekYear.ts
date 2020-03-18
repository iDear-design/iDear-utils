import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import differenceInCalendarDays from "./differenceIn/differenceInCalendarDays";
import startOfWeekYear from "./startOfWeekYear";
import toDate from "./toDate";

export default function setWeekYear(dirtyDate, dirtyWeekYear, dirtyOptions) {
  requiredArgs(2, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate =
    locale && locale.options && locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  var date = toDate(dirtyDate)
  var weekYear = toInteger(dirtyWeekYear)
  var diff = differenceInCalendarDays(date, startOfWeekYear(date, dirtyOptions))
  var firstWeek = new Date(0)
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate)
  firstWeek.setHours(0, 0, 0, 0)
  date = startOfWeekYear(firstWeek, dirtyOptions)
  date.setDate(date.getDate() + diff)
  return date
}
