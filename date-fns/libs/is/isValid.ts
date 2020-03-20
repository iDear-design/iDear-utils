import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function isValid(dirtyDate: any): boolean {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  // @ts-ignore
  return !isNaN(date)
}
