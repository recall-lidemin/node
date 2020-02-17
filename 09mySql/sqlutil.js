/**
 * 封装数据操作模块
 * 
 *  */

const mysql = require('mysql')

const sqlbuff = (sqlStr, callback) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345123',
        database: 'mydatabase'
    })
    connection.connect()
    connection.query(sqlStr, (error, results) => {
        if (error) throw error
        callback(null, results)
    });
}

module.exports = {
    sqlbuff
}