import getWeekYear from "../get/getWeekYear";
import startOfWeek from "./startOfWeek";
import toInteger from "../../utils/toInteger";
import requiredArgs from "../../utils/requiredArgs";

export default function startOfWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)

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

  var year = getWeekYear(dirtyDate, dirtyOptions)
  var firstWeek = new Date(0)
  firstWeek.setFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setHours(0, 0, 0, 0)
  var date = startOfWeek(firstWeek, dirtyOptions)
  return date
}
