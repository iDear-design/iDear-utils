import requiredArgs from "../utils/requiredArgs";
import lastDayOfWeek from "./lastDayOfWeek";

export default function lastDayOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments)

  return lastDayOfWeek(dirtyDate, { weekStartsOn: 1 })
}
