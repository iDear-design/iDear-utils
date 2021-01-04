import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function isPast(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getTime() < Date.now()
}
