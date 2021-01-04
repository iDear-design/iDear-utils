import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function getDate(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const dayOfMonth = date.getDate()
  return dayOfMonth
}
