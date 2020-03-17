import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function startOfHour(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}
