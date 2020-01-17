import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function endOfMinute(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setSeconds(59, 999)
  return date
}
