/**
 * @description 定义事件监听
 */
const eventBus: any = {}

/**
 * @description 回调返回数据
 */
let callbacksObj: object = {}

/**
 * @description 绑定事件监听
 * @param {String} eventName 事件名称
 * @param {Function} callback 事件方法
 */
eventBus.on = function (eventName: string, callback: Function) {
  const callbacks = callbacksObj[eventName]
  if (callbacks) {
    callbacks.push(callback)
  } else {
    callbacksObj[eventName] = [callback]
  }
}

/**
 * @description 分发事件
 * @param {String} eventName 事件名称
 * @param {Any} data 事件数据
 */
eventBus.emit = function (eventName: string, data: any) {
  const callbacks = callbacksObj[eventName]
  if (callbacks && callbacks.length > 0) {
    callbacks.forEach(callback => {
      callback(data)
    })
  }
}

/**
 * @description 移除事件监听
 * @param {String} eventName 事件名称
 */
eventBus.off = function (eventName: string) {
  if (eventName) {
    delete callbacksObj[eventName]
  } else {
    callbacksObj = {}
  }
}

export default eventBus
