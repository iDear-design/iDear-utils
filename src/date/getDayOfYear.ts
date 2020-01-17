import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";
import startOfYear from "./startOfYear";
import differenceInCalendarDays from "./differenceInCalendarDays";

export default function getDayOfYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const diff = differenceInCalendarDays(date, startOfYear(date))
  const dayOfYear = diff + 1
  return dayOfYear
}
