import addDays from "./addDays";
import isSameDay from "./isSameDay";
import requiredArgs from "../utils/requiredArgs";

export default function isTomorrow(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameDay(dirtyDate, addDays(Date.now(), 1))
}
