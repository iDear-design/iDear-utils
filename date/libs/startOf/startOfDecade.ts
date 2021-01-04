import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function startOfDecade(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const decade = Math.floor(year / 10) * 10
  date.setFullYear(decade, 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
