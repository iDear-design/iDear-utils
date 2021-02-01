import {getAngle} from "@idear-utils/obtain";

// 横屏
export default function isTransverse(): Boolean {
  let angleNum = getAngle()
  return angleNum === 90 || angleNum === -90
}

// 竖屏
export default function isVertical(): Boolean {
  let angleNum = getAngle()
  return angleNum === 180 || angleNum === 0
}
