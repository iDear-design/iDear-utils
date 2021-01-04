import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import addHours from "../add/addHours";

export default function subHours(dirtyDate: Date | number, dirtyAmount: number) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addHours(dirtyDate, -amount)
}
