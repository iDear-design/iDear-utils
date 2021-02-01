import {versions} from "@idear-utils/obtain";

// 判断是否IE内核
export default function isIE() {
  return versions().trident
}
