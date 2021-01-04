import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function isTuesday(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 2
}
