import angle from "./angle";
// 横屏
export default function isVertical(): Boolean {
  let angleNum = angle()
  return angleNum === 180 || angleNum === 0
}
