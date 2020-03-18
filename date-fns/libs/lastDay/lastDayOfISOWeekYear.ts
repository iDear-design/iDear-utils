import requiredArgs from "../utils/requiredArgs";
import getISOWeekYear from "./get/getISOWeekYear";
import startOfISOWeek from "./startOfISOWeeek";

export default function lastDayOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments)

  var year = getISOWeekYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}
