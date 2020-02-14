/**
 * 数据操作模块
 */
const fs = require('fs')
const path = require('path')

const DATAFILE = '../db/student.json'
const filePath = path.join(__dirname, DATAFILE)

module.exports = {
    // 获取所有学生列表
    getMsg(callback) {
        // 异步编程，回调函数封装： 
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                return callback(err)
            }
            callback(null, JSON.parse(data))
        })
    },
    // 增加学生
    add() {

    },
    // 编辑学生
    edit() {

    },
    // 删除学生
    del() {

    }
}