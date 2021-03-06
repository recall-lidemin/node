/**
 * 
 * 用户信息操作模块
 * 
 *  */

const fs = require('fs')
const path = require('path')

const DATAFILE = '../db/user.json'
const userPath = path.join(__dirname, DATAFILE)

module.exports = {
    add(user, callback) {
        fs.readFile(userPath, 'utf-8', (err, data) => {
            if (err) {
                return callback(err)
            }
            let newarr = JSON.parse(data)
            newarr.push(user)
            fs.writeFile(userPath, JSON.stringify(newarr), err => {
                if (err) {
                    return callback(err)
                }
                callback(null)
            })
        })
    },
    get(id, callback) {

        fs.readFile(userPath, 'utf-8', (err, data) => {
            if (err) {
                return callback(err)
            }
            let arr = JSON.parse(data).find(item => item.id == id)
            if (!arr) {
                return callback({
                    code: 404,
                    msg: '获取失败'
                })
            }
            callback(null, arr)
        })

    },
    login(userName, passWord, callback) {
        fs.readFile(userPath, 'utf-8', (err, data) => {
            if (err) {
                return callback(err)
            }
            let loginInfo = JSON.parse(data).find(item => item.name === userName && item.password === passWord)
            if (!loginInfo) {
                return callback({
                    code: 404,
                    msg: '用户名或密码错误'
                })
            }
            callback(null, {
                code: 200,
                msg: '登陆成功'
            })
        })
    }
}