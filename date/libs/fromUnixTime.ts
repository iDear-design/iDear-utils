import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import toDate from "./toDate";

export default function fromUnixTime(dirtyUnixTime) {
  requiredArgs(1, arguments)

  var unixTime = toInteger(dirtyUnixTime)

  return toDate(unixTime * 1000)
}
