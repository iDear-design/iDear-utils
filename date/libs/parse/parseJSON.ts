import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function parseJSON(argument) {
  requiredArgs(1, arguments)

  if (typeof argument === 'string') {
    var parts = argument.match(
      /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|\+00:?00)?/
    )
    if (parts) {
      return new Date(
        Date.UTC(
          +parts[1],
          parts[2] - 1,
          +parts[3],
          +parts[4],
          +parts[5],
          +parts[6],
          +((parts[7] || '0') + '00').substring(0, 3)
        )
      )
    }
    return new Date(NaN)
  }
  return toDate(argument)
}
