import {WIN} from "../../_base/system";

export function isNotification(): Boolean {
  let Notification = WIN.Notification
  if (!Notification) {
    console.error("对不起，您的浏览器不支持通知功能！")
  }
  return Notification
}

export function isPermission() {
  let permissionName = WIN.Notification.permission
  let Permission = true
  if (permissionName === "denied") {
    Permission = false
    console.error("对不起，您的浏览器设置拒绝接收通知！")
  }
  return Permission
}
