import requiredArgs from "../utils/requiredArgs";
import eachDayOfInterval from "./eachDayOfInterval";
import isWeekend from "./isWeekend";
import isSunday from "./isSunday";

export default function eachWeekendOfInterval(interval) {
  requiredArgs(1, arguments)

  var dateInterval = eachDayOfInterval(interval)
  var weekends = []
  var index = 0
  while (index < dateInterval.length) {
    var date = dateInterval[index++]
    if (isWeekend(date)) {
      weekends.push(date)
      if (isSunday(date)) index = index + 5
    }
  }
  return weekends
}
