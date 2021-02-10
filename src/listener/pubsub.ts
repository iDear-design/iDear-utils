/**
 * @desc 自定义消息订阅与发布
 */
const pubSub: any = {}

/**
 * @desc 保存所有回调的容器
 */
let callbacksObj: object = {}

/**
 * @desc 用于生成token的标记
 */
let id: number = 0

/**
 * @desc 订阅消息
 * @param {String} msgName  订阅消息名称
 * @param {Function} callback 事件方法
 */
pubSub.subscribe = (msgName: string, callback: Function) => {
  const token = 'token_' + ++id
  // 取出当前消息对应的callbacks
  const callbacks = callbacksObj[msgName]
  if (!callbacks) {
    callbacksObj[msgName] = {
      [token]: callback
    }
  } else {
    callbacks[token] = callback
  }
  // 返回token
  return token
}

/**
 * @desc 发布异步的消息
 * @param {String} msgName  订阅消息名称
 * @param {Any} callback 事件方法
 */
pubSub.publish = (msgName: string, data: any) => {
  // 取出当前消息对应的callbacks
  let callbacks = callbacksObj[msgName]
  // 如果有值
  if (callbacks) {
    // 启动定时器, 异步执行所有的回调函数
    setTimeout(() => {
      Object.values(callbacks).forEach(callback => {
        callback(data)
      })
    }, 0)
  }
}

/**
 * @desc 发布同步的消息
 * @param {String} msgName  订阅消息名称
 * @param {Any} callback 事件方法
 */
pubSub.publishSync = (msgName: string, data: any) => {
  // 取出当前消息对应的callbacks
  const callbacks = callbacksObj[msgName]
  // 如果有值
  if (callbacks) {
    // 立即同步执行所有的回调函数
    Object.values(callbacks).forEach(callback => {
      callback(data)
    })
  }
}

/**
 * @desc 取消消息订阅
 * @param {String | undefined} flag 订阅消息名称
 */
pubSub.unsubscribe = (flag: any) => {
  // 如果flag没有指定或者为null, 取消所有
  if (flag === undefined) {
    callbacksObj = {}
  } else if (typeof flag === 'string') {
    // flag是token [传入token字符串]
    if (flag.indexOf('token_') === 0) {
      // 找到flag对应的callbacks
      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))
      // 如果存在, 删除对应的属性
      if (callbacks) {
        delete callbacks[flag]
      }
    }
    // flag是msgName字符串
    else {
      delete callbacksObj[flag]
    }

  } else {
    throw new Error('如果传入参数, 必须是字符串类型')
  }
}

export default pubSub
