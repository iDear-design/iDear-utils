import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function isFuture(dirtyDate) {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getTime() > Date.now()
}
