import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function isSunday(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 0
}
