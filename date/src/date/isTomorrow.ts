import addDays from "./addDays";
import isSameDay from "./isSameDay";
import requiredArgs from "./_libs/requiredArgs";

export default function isTomorrow(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameDay(dirtyDate, addDays(Date.now(), 1))
}
