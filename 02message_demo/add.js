const fs = require('fs')
const path = require('path')
const read = require('./read')

// NB优化，消除魔术数！
const DATA_FILE = 'db.json'
const filePath = path.join(__dirname, DATA_FILE)


const add = (name, content) => {

    let data = read.get()
    let id = data.length ? data[0]["id"] + 1 : 1
    let item = {
        id,
        name,
        content,
        "dt": Date.now()
    }

    data.unshift(item)

    fs.writeFileSync(filePath, JSON.stringify(data))

}
add('Recall', '嘻嘻嘻嘻嘻')