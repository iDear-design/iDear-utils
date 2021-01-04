import endOfDay from "./endOfDay";

export default function endOfToday(): Date {
  return endOfDay(Date.now())
}
