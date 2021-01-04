import toInteger from "../../utils/toInteger";
import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function addMilliseconds(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const timestamp = toDate(dirtyDate).getTime()
  const amount = toInteger(dirtyAmount)
  return new Date(timestamp + amount)
}
