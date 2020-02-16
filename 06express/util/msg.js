const path = require('path')
const fs = require('fs')

const MSGDATA = '../db/msg.json'
const msgPath = path.join(__dirname, MSGDATA)

module.exports = {
    publish(message, callback) {
        fs.readFile(msgPath, 'utf-8', (err, data) => {
            if (err) {
                return callback(err)
            }
            let msgArr = JSON.parse(data).push(message)
            fs.writeFile(msgPath, msgArr, err => {
                if (err) {
                    return callback(err)
                }
                callback(null)
            })
        })
    },
    getMsg(callback) {
        fs.readFile(msgPath, 'utf-8', (err, data) => {
            if (err) {
                return callback(err)
            }
            callback(null, data)
        })
    }
}