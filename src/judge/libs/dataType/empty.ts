import {protoTypeString} from "@idear-utils/config";

/**
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
const isEmpty = function (obj) {
  if (obj == null) return true;
  if (protoTypeString(obj) == "Array" || protoTypeString(obj) == "String") return obj.length === 0;

  for (let key in obj) if (obj.hasOwnProperty(key)) return false;
}
