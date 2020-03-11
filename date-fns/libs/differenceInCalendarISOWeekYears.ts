import getISOWeekYear from "./getISOWeekYear";
import requiredArgs from "../utils/requiredArgs";

export default function differenceInCalendarISOWeekYears(
  dirtyDateLeft,
  dirtyDateRight
) {
  requiredArgs(2, arguments)

  return getISOWeekYear(dirtyDateLeft) - getISOWeekYear(dirtyDateRight)
}
