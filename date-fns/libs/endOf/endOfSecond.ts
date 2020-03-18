import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function endOfSecond(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setMilliseconds(999)
  return date
}
