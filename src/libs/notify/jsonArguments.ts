export default function jsonArguments(news, olds) {
  for (const a in olds) {
    if (news[a]) {
      olds[a] = news[a];
    }
  }
  return olds;
}
