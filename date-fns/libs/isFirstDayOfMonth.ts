import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function isFirstDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDate() === 1
}
