import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import addISOWeekYears from "../add/addISOWeekYears";

export default function subISOWeekYears(dirtyDate: Date | number, dirtyAmount: number) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addISOWeekYears(dirtyDate, -amount)
}
