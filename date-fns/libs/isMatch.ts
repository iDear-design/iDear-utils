import requiredArgs from "../utils/requiredArgs";
import isValid from "./isValid";

export default function isMatch(dateString, formatString, dirtyOptions) {
  requiredArgs(2, arguments)
  return isValid(parse(dateString, formatString, new Date(), dirtyOptions))
}
