import {versions} from "@idear-utils/obtain";

// 判断是否webKit内核
export default function isWebKit() {
  return versions().webKit
}
