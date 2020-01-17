import getTime from "./getTime";
import requiredArgs from "./_libs/requiredArgs";

export default function getUnixTime(dirtyDate) {
  requiredArgs(1, arguments)

  return Math.floor(getTime(dirtyDate) / 1000)
}
