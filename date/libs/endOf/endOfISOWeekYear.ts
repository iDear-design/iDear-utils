import requiredArgs from "../../utils/requiredArgs";
import getISOWeekYear from "../get/getISOWeekYear";
import startOfISOWeek from "../startOf/startOfISOWeeek";

export default function endOfISOWeekYear(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const year = getISOWeekYear(dirtyDate)
  const fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  const date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}
