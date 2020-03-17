import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function startOfMinute(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setSeconds(0, 0)
  return date
}
