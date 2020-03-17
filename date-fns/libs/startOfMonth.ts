import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function startOfMonth(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}
