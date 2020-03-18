import isSameDay from "./isSameDay";
import subDays from "./subDays";
import requiredArgs from "../utils/requiredArgs";

export default function isYesterday(dirtyDate) {
  requiredArgs(1, arguments)

  return isSameDay(dirtyDate, subDays(Date.now(), 1))
}
