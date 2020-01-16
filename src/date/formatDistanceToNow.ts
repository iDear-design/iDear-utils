import requiredArgs from "./_libs/requiredArgs";
import formatDistance from "./formatDistance";

export default function formatDistanceToNow(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)

  return formatDistance(dirtyDate, Date.now(), dirtyOptions)
}
