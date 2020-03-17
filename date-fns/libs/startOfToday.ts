import startOfDay from "./startOfDay";

export default function startOfToday(): Date {
  return startOfDay(Date.now())
}
