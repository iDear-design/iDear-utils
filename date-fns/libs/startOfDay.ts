import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function startOfDay(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}
