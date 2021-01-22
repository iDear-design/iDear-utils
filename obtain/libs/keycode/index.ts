import {keyCodeConfig} from "@idear-tools/config"

/**
 * @desc 根据keycode获得键名
 * @param  {Number} keycode
 * @return {String}
 */
function getKeyName(keycode) {
  if (keyCodeConfig[keycode]) {
    return keyCodeConfig[keycode];
  } else {
    console.log('Unknow Key(Key Code:' + keycode + ')');
    return '';
  }
};
