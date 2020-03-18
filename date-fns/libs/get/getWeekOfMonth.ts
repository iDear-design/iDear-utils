import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import getDate from "./getDate";
import startOfMonth from "../startOfMonth";
import getDay from "./getDay";

export default function getWeekOfMonth(date, dirtyOptions) {
  requiredArgs(1, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var currentDayOfMonth = getDate(date)
  if (isNaN(currentDayOfMonth)) {
    return currentDayOfMonth
  }

  var startWeekDay = getDay(startOfMonth(date))
  var lastDayOfFirstWeek = 0

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay
  }

  var weekNumber = 1

  if (currentDayOfMonth > lastDayOfFirstWeek) {
    var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek
    weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7)
  }
  return weekNumber
}
