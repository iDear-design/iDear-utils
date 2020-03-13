import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function isMonday(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 1
}
