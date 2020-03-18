export default function isExists(year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError(
      '3 argument required, but only ' + arguments.length + ' present'
    )
  }

  const date = new Date(year, month, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  )
}
