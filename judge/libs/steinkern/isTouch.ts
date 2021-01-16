import {win} from "@idear-tools/config";

// 判断是否Touch屏幕
export default function isTouch() {
  return ('ontouchstart' in win) || win.DocumentTouch
}
