import requiredArgs from "./_libs/requiredArgs";
import formatDistanceStrict from "./formatDistanceStrict";

export default function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)

  return formatDistanceStrict(dirtyDate, Date.now(), dirtyOptions)
}
