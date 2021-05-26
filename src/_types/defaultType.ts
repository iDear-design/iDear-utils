export interface replaceFieldConfig {
  id: string,
  pid: string,
  children: string
}

export interface browserConfig {
  name: string,
  version: string
}

export interface printConfig {
  /**
   * 引入head 中的link stylesheet
   */
  importCss?: boolean,
  /**
   * 引入style标签中的样式
   */
  importStyle?: boolean,
  /**
   * 需要载入的第三方样式表
   */
  loadCss?: Array<string>,
  /**
   * 不需要打印的class名
   */
  noPrint?: Array<string>,
  /**
   * 打印标题
   */
  title?: string,
  /**
   * 延迟打印时间，确保iframe中的静态资源加载完成
   */
  delay?: number,
  /**
   * 打开打印窗口前的钩子函数,可以针对打印文档进行自定义调整，接受一个document参数
   */
  beforePrinfHandle?: Function,
  /**
   * 打印完成的钩子函数
   */
  afterPrintHandle?: Function
}

