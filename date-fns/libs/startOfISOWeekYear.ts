import getISOWeekYear from "./getISOWeekYear";
import startOfISOWeek from "./startOfISOWeeek";
import requiredArgs from "../utils/requiredArgs";

export default function startOfISOWeekYear(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const year = getISOWeekYear(dirtyDate)
  const fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  const date = startOfISOWeek(fourthOfJanuary)
  return date
}
