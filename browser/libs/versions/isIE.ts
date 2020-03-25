import versions from "./versions";

// 判断是否IE内核
export default function isIE() {
  return versions().trident
}
