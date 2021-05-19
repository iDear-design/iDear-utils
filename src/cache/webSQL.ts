import {isWebSQL} from "../judge/cache";
import {WEBSQL} from "../_libs/config/cache";

/**
 * @description 声明webSql数据类型
 * */
interface WebSQLConfig {
  name: string, // 数据库名称
  version: string, // 版本号
  description: string, // 数据库的描述
  size: number // 数据的大小
}

/**
 * @description 默认的webSql库配置数据
 * */
const defaultDatabase: any = {
  name: 'iDear-WebSQL', // 数据库名称
  version: '1.0.0', // 版本号
  description: '这是@idear-utils/cache的webSQL数据库', // 数据库的描述
  size: 10 * 1024 * 1024 // 数据的大小
}

/**
 * @description webSql库
 * */
export default class webSQL {
  public WEBSQLDB: any;

  /**
   * @description 构造函数，初始化
   * @param {WebSQLConfig} config webSql库配置数据
   * */
  constructor(config: WebSQLConfig) {
    if (isWebSQL) {
      return
    }

    let databaseName: string
    let databaseVersion: string
    let databaseDescription: string
    let databaseEstimatedSize: number

    if (config) {
      databaseName = config.name
      databaseVersion = config.version
      databaseDescription = config.description
      databaseEstimatedSize = config.size
    } else {
      databaseName = defaultDatabase.name
      databaseVersion = defaultDatabase.version
      databaseDescription = defaultDatabase.description
      databaseEstimatedSize = defaultDatabase.size
    }

    if (!databaseName && !databaseVersion && !databaseDescription && !databaseEstimatedSize) {
      console.error(`初始化数据有误,需要的数据为：${defaultDatabase}，而您给的数据为：${config}`);
      return
    } else {
      this.WEBSQLDB = WEBSQL(databaseName, databaseVersion, databaseDescription, databaseEstimatedSize)
    }
    if (this.WEBSQLDB) {
      console.info(`${new Date()}初始化数据库${databaseName}成功!`);
    } else {
      console.error(`${new Date()}初始化数据库${databaseName}失败!`);
    }
  }

  /**
   * @description 创建表
   * @param {string} tableName 表名称
   * @param {object} colParams 表头名称
   * @param {string} primaryKey 主键名称
   * @param {string[]} uniqueKeys 唯一键
   * */
  createTable(tableName: string, colParams: object = {}, primaryKey: string = '', uniqueKeys: string[] = []) {
    let sqlStr: string = '';
    for (let key in colParams) {
      // 判断有没有主键
      if (key.toLowerCase() === primaryKey.toLowerCase()) {
        sqlStr += `[${key}] INTEGER PRIMARY KEY AUTOINCREMENT,`;
        continue;
      }

      if (colParams[key] && (colParams[key] === 'number' || colParams[key] === 'boolean')) {
        sqlStr += `[${key}] INTEGER`;
      } else if (colParams[key] && colParams[key] === 'object') {
        sqlStr += `[${key}] BLOB`;
      } else {
        sqlStr += `[${key}] TEXT`;
      }

      let unique = uniqueKeys.indexOf(key) !== -1 ? " UNIQUE" : "";
      sqlStr += unique + ",";
    }
    sqlStr = sqlStr.substr(0, sqlStr.length - 1);
    let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (${sqlStr})`;
    console.log(9999, sql)
  }

  /**
   * @description 删除表
   * @param {string} tableName 表名称
   * */
  deleteTable(tableName: string) {
    let sql = `DROP TABLE ${tableName}`;
    console.log(9999, sql)
  }

  /**
   * @description 执行SQL代码
   * @param {string} sql 索引值
   * @param {any[]} arr 索引值
   * @param {log} keyIndex 索引值
   * */
  executeSql(sql: string, arr: any[] = [], log: boolean = true) {
    return new Promise((resolve, reject) => {
      this.WEBSQLDB.transaction(tx => {
        tx.executeSql(sql, arr, (_tx, result) => {
          resolve(result)
          if (log) {
            let title = '';
            if (sql.toLowerCase().indexOf('insert') !== -1) title = '插入数据成功';
            if (sql.toLowerCase().indexOf('delete') !== -1) title = '删除数据成功';
            if (sql.toLowerCase().indexOf('select') !== -1) title = '查询数据成功';
            if (sql.toLowerCase().indexOf('update') !== -1) title = '更新数据成功';
            if (sql.toLowerCase().indexOf('create') !== -1) title = '创建表格成功';
            if (sql.toLowerCase().indexOf('drop') !== -1) title = '删除表格成功';
            console.log(new Date() + title, ' 语句:' + sql, ' 参数:[' + arr + ']');
          }
        }, (_tx, error) => {
          reject(null);
          if (log) {
            let title = '';
            if (sql.toLowerCase().indexOf('insert') !== -1) title = '插入数据失败';
            if (sql.toLowerCase().indexOf('delete') !== -1) title = '删除数据失败';
            if (sql.toLowerCase().indexOf('select') !== -1) title = '查询数据失败';
            if (sql.toLowerCase().indexOf('update') !== -1) title = '更新数据失败';
            if (sql.toLowerCase().indexOf('create') !== -1) title = '创建表格失败';
            if (sql.toLowerCase().indexOf('drop') !== -1) title = '删除表格失败';
            console.log(new Date() + title, ' 语句:' + sql, ' 参数:[' + arr + ']', '信息:' + error.message);
          }
        })
      })
    })
  }

  /**
   * @description 新增数据
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * */
  insertRow(tableName: string, rowPrams: any = {}, primaryKey: string = '') {
    let colParams = '';
    let valParams = '';
    for (let key in rowPrams) {
      if (key.toLowerCase() === primaryKey.toLowerCase()) continue;
      colParams += `[${key}],`;
      valParams += `'${rowPrams[key]}',`;
    }
    colParams = colParams.substr(0, colParams.length - 1);
    valParams = valParams.substr(0, valParams.length - 1);
    let sql = `INSERT INTO [${tableName}] (${colParams}) VALUES (${valParams})`;
    console.log(9999, sql)
  }

  /**
   * @description 删除数据
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * */
  deleteRow(tableName: string, rowPrams: any) {
    let whereString = ''
    let rowPramsArr = Object.keys(rowPrams)
    rowPramsArr.forEach((key, index) => {
      whereString += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]} AND ` : `[${key}] = ${rowPrams[key]}`
    })
    let sql = `DELETE FROM [${tableName}] WHERE (${whereString})`
    console.log(9999, sql)
  }

  /**
   * @description 更新数据
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * */
  updateRow(tableName: string, rowPrams: any, primaryKey: string) {
    let whereString = ''
    let updateParams = ''
    let rowPramsArr = Object.keys(rowPrams)
    rowPramsArr.forEach((key, index) => {
      if (key.toLowerCase() === primaryKey.toLowerCase()) {
        whereString += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]} AND ` : `[${key}] = ${rowPrams[key]}`
      } else {
        updateParams += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]}, ` : `[${key}] = ${rowPrams[key]}`
      }
    })
    let sql = `UPDATE [${tableName}] SET (${updateParams}) WHERE (${whereString})`
    console.log(9999, sql)
  }

  /**
   * @description 查找[指定]数据
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * */
  selectRow(tableName: string, colParams: any, rowPrams: any, orderPrams?: any) {
    let whereString = ''
    let paramsString = ''
    let orderString = ''
    if (orderPrams) {
      orderString = 'OEDER BY '
    }
    let colParamsArr = Object.keys(colParams)
    colParamsArr.forEach((key, index) => {
      whereString += (index === (colParamsArr.length - 1)) ? `[${key}] = ${colParams[key]}, ` : `[${key}] = ${colParams[key]}`
    })
    let rowPramsArr = Object.keys(rowPrams)
    rowPramsArr.forEach((key, index) => {
      whereString += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]} AND ` : `[${key}] = ${rowPrams[key]}`
    })
    let orderPramsArr = Object.keys(orderPrams)
    orderPramsArr.forEach((key, index) => {
      orderString += (index === (orderPramsArr.length - 1)) ? `[${key}] = ${orderPrams[key]}, ` : `[${key}] = ${orderPrams[key]}`
    })

    let sql = `SELECT ${paramsString} FROM [${tableName}] WHERE ${whereString} ${orderString}`;
    console.log(9999, sql)
  }

  /**
   * @description 查找[所有]数据
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * @param {string} keyIndex 索引值
   * */
  selectAllRow(tableName: string, rowPrams: any, orderPrams?: any) {
    let whereString = ''
    let orderString = ''
    if (orderPrams) {
      orderString = 'OEDER BY '
    }
    let rowPramsArr = Object.keys(rowPrams)
    rowPramsArr.forEach((key, index) => {
      whereString += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]} AND ` : `[${key}] = ${rowPrams[key]}`
    })
    let orderPramsArr = Object.keys(orderPrams)
    orderPramsArr.forEach((key, index) => {
      orderString += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]}, ` : `[${key}] = ${rowPrams[key]}`
    })

    let sql = `SELECT * FROM [${tableName}] WHERE ${whereString} ${orderString}`;
    console.log(9999, sql)
  }
}
