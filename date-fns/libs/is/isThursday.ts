import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function isThursday(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 4
}
