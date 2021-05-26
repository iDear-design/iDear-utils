import {printConfig} from "../_types/defaultType";

/**
 * @description 打印的初始化配置
 */
export const printDefaultData: printConfig = {
  importCss: true,
  importStyle: true,
  loadCss: [],
  noPrint: ['.idear-hidden', '.print-hidden'],
  title: '',
  delay: 300,
  beforePrinfHandle: null,
  afterPrintHandle: null
}
