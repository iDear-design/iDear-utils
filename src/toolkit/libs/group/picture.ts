/**
 * ## 多张图片制作微信群聊组合头像
 * @param {Array} data 图片集合[]
 * @returns {any}
 */
export function groupPicture(data: any[]): any {
  let base64 = []
  let c = document.createElement('canvas')
  let ctx = c.getContext('2d')
  let len = data.length
  c.width = 38
  c.height = 38
  ctx.rect(0, 0, c.width, c.height)
  ctx.fillStyle = '#fff'
  ctx.fill()

  // 循环把图片放入canvas
  function drawing(n) {
    if (n < len) {
      let img = new Image
      // 解决跨域
      img.crossOrigin = 'Anonymous'
      img.src = data[n]
      // 根据群成员人数，创建不同群图片
      if (len === 2) {
        if (n === 0) {
          ctx.drawImage(img, 0, 0, 19, 19)
        } else if (n === 1) {
          ctx.drawImage(img, 19, 19, 19, 19)
        }
      } else if (len === 3) {
        if (n === 0) {
          ctx.drawImage(img, 9, 0, 19, 19)
        } else if (n === 1) {
          ctx.drawImage(img, 0, 19, 19, 19)
        } else if (n === 2) {
          ctx.drawImage(img, 19, 19, 19, 19)
        }
      } else if (len === 4) {
        if (n === 0) {
          ctx.drawImage(img, 0, 0, 19, 19)
        } else if (n === 1) {
          ctx.drawImage(img, 19, 0, 19, 19)
        } else if (n === 2) {
          ctx.drawImage(img, 0, 19, 19, 19)
        } else if (n === 3) {
          ctx.drawImage(img, 19, 19, 19, 19)
        }
      }
      // 递归
      drawing(n + 1)
    } else {
      // 保存生成作品图片
      base64.push(c.toDataURL("image/png"))
    }
  }

  drawing(0)
  return base64[0]
}
