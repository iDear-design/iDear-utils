import versions from "./versions";

// 判断是否移动端
export default function isWebKit() {
  return versions().mobile || versions().android || versions().ios
}
