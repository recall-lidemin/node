const fs = require('fs')
const path = require('path')
const read = require('./read')

// NB优化，消除魔术数！
const DATA_FILE = 'db.json'
const filePath = path.join(__dirname, DATA_FILE)

module.exports = {
    add(name, content) {

        let data = this.get()
        let id = data.length ? data[0]["id"] + 1 : 1
        let item = {
            id,
            name,
            content,
            "dt": Date.now()
        }

        data.unshift(item)

        fs.writeFileSync(filePath, JSON.stringify(data))

    },
    del(id) {
        let data = this.get()
        data.forEach((item, index) => {
            if (item.id == id) {
                return data.splice(index, 1)
            }
        });

        fs.writeFileSync(filePath, JSON.stringify(data))
    },
    get() {
        let str = fs.readFileSync(filePath, 'utf8')
        let arr = JSON.parse(str)
        return arr
    }
}