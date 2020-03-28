import webSQL from "./websqslInfo";

const defaultDatabase: any = {
  name: 'Timi-WebSQL', // 数据库名称
  version: '1.0.0', // 版本号
  description: '这是@timi-utils/cache的webSQL数据库', // 数据库的描述
  size: 10 * 1024 * 1024 // 数据的大小
}

// 声明
interface WebSQLConfig {
  name: string, // 数据库名称
  version: string, // 版本号
  description: string, // 数据库的描述
  size: number // 数据的大小
}

export default class WebSQL {
  public WEBSQLDB: any;

  // 构造函数，初始化
  constructor(config: WebSQLConfig) {
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
      this.WEBSQLDB = webSQL(databaseName, databaseVersion, databaseDescription, databaseEstimatedSize)
    }
    if (this.WEBSQLDB) {
      console.info(`${new Date()}初始化数据库${databaseName}成功!`);
    } else {
      console.error(`${new Date()}初始化数据库${databaseName}失败!`);
    }
  }

  // 创建表
  createTable(tableName: string, colParams: any = {}, primaryKey: string = '', uniqueKeys: string[] = []) {
    let sqlStr = '';
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

  // 删除表
  dropTable(tableName: string) {
    let sql = `DROP TABLE ${tableName}`;
    console.log(9999, sql)
  }

  // 执行SQL代码
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

  // 新增数据
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

  // 删除数据
  deleteRow(tableName: string, rowPrams: any) {
    let whereString = ''
    let rowPramsArr = Object.keys(rowPrams)
    rowPramsArr.forEach((key, index) => {
      whereString += (index === (rowPramsArr.length - 1)) ? `[${key}] = ${rowPrams[key]} AND ` : `[${key}] = ${rowPrams[key]}`
    })
    let sql = `DELETE FROM [${tableName}] WHERE (${whereString})`
    console.log(9999, sql)
  }

  // 更新数据
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

  // 查找[指定]数据
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

  // 查找[所有]数据
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
