import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function endOfDecade(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const decade = 9 + Math.floor(year / 10) * 10
  date.setFullYear(decade, 11, 31)
  date.setHours(23, 59, 59, 999)
  return date
}
