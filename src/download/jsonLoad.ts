import {DOC} from "../_base/system";
import {urlDownload} from "./downLoad";

/**
 * @description 获取上传的json文件的数据
 * @param {Function} callBack: 回调函数
 * @returns {any}
 */
export const jsonRead = (callBack: Function): any => {
  let link: any = DOC.createElement("input");
  link.setAttribute("type", "file");
  link.setAttribute("accept", ".json");
  link.addEventListener("change", (_event: any) => {
    let file = link.files[0];
    let fileReader: any = new FileReader();
    fileReader.onload = (event: any) => {
      let jsonData = JSON.parse(event.target.result);
      callBack(jsonData)
    };
    fileReader.readAsText(file);
  });
  link.click();
}

/**
 * @description 导出json文件
 * @param {string} jsonData: json数据
 * @param {string} fileName: 导出文件的名称
 * @returns {any}
 */
export const jsonSave = (jsonData: object, fileName: string = 'JSON数据') => {
  let jsonString = JSON.stringify(jsonData);
  let blob = new Blob([jsonString]);
  let blobURL = URL.createObjectURL(blob);
  urlDownload(blobURL, `${fileName}.json`)
}
