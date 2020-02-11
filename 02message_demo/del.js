const fs = require('fs')
const path = require('path')
const read = require('./read')

// NB优化，消除魔术数！
const DATA_FILE = 'db.json'
const filePath = path.join(__dirname, DATA_FILE)

const del = id => {
    let data = read.get()
    data.forEach((item, index) => {
        if (item.id == id) {
            return data.splice(index, 1)
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(data))
}
del(5)