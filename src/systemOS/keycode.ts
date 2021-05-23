import {keyCodeConfig} from "../_base/keycode";

/**
 * @description 根据keycode获得键名
 * @param  {Number} keycode
 * @return {String}
 */
export const getKeyName = (keycode: number): string => {
  if (keyCodeConfig[keycode]) {
    return keyCodeConfig[keycode];
  } else {
    console.error('没有找到对应的键名:' + keycode);
    return '';
  }
};
