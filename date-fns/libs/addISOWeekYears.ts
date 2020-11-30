import toInteger from "../utils/toInteger";
import getISOWeekYear from "./getISOWeekYear";
import setISOWeekYear from "./setISOWeekYear";
import requiredArgs from "../utils/requiredArgs";

export default function addISOWeekYears(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return setISOWeekYear(dirtyDate, getISOWeekYear(dirtyDate) + amount)
}
