import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function isFriday(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 5
}
