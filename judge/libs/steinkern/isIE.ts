import {versions} from "@idear-tools/obtain";

// 判断是否IE内核
export default function isIE() {
  return versions().trident
}
