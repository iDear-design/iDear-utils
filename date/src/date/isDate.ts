import requiredArgs from "./_libs/requiredArgs";

export default function isDate(value) {
  requiredArgs(1, arguments)

  return (
    value instanceof Date ||
    (typeof value === 'object' &&
      Object.prototype.toString.call(value) === '[object Date]')
  )
}
