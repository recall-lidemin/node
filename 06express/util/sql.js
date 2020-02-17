/**
 * 
 * 数据库操作模块
 * 
 *  */
const mysql = require('mysql')

module.exports = {
    loginSql(sqlStr, callback) {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345123',
            database: 'mydatabase'
        })
        connection.connect()
        connection.query(sqlStr, (err, data) => {
            if (err) throw err
            callback(null, data)
        })
    }
}