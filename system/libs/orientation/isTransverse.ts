import angle from "./angle";
// 横屏
export default function isTransverse(): Boolean {
  let angleNum = angle()
  return angleNum === 90 || angleNum === -90
}
