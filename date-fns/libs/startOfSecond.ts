import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function startOfSecond(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setMilliseconds(0)
  return date
}
