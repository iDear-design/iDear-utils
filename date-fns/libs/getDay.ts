import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function getDay(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const day = date.getDay()
  return day
}
