import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function startOfYear(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const cleanDate = toDate(dirtyDate)
  const date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
