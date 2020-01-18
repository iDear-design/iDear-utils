import isSameDay from "./isSameDay";
import requiredArgs from "./_libs/requiredArgs";

export default function isToday(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameDay(dirtyDate, Date.now())
}

