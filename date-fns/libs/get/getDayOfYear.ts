import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";
import startOfYear from "../startOf/startOfYear";
import differenceInCalendarDays from "../differenceIn/differenceInCalendarDays";

export default function getDayOfYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const diff = differenceInCalendarDays(date, startOfYear(date))
  const dayOfYear = diff + 1
  return dayOfYear
}
