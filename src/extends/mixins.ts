/**
 * @description 将多个class对象合成为一个类、使用的时候，只要继承这个类即可
 * @param  {object} mixins
 * @return {any}
 */
export const mix = (...mixins): any => {
  class Mix {
    // 拷贝实例属性
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin());
      }
    }
  }

  for (let mixin of mixins) {
    // 拷贝静态属性
    copyProperties(Mix, mixin);
    // 拷贝原型属性
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}

/**
 * @description 复制多个对象合成为一个类
 * @param  {object} target
 * @param  {object} source
 * @return {any}
 */
const copyProperties = (target: any, source: any): any => {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
