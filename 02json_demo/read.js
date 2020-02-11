const fs = require('fs')
const path = require('path')

// NB优化，消除魔术数！
const DATA_FILE = 'db.json'
const filePath = path.join(__dirname, DATA_FILE)

module.exports = {
    get() {
        let str = fs.readFileSync(filePath, 'utf8')
        let arr = JSON.parse(str)
        return arr
    }
}