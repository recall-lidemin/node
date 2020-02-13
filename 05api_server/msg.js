const fs = require('fs')
const path = require('path')

const DATAFILE = 'message.json'
const dataPath = path.join(__dirname, DATAFILE)

module.exports = {
    get() {
        let getmsg = fs.readFileSync(dataPath, 'utf-8')
        let arr = JSON.parse(getmsg)
        return arr
    },
    del(id) {
        let getmsg = fs.readFileSync(dataPath, 'utf-8')
        let arr = JSON.parse(getmsg)
        arr.forEach((item, index) => {
            if (item.id === id) {
                arr.splice(index, 1)
            }
        });
        return arr
    },
    add(name, content) {
        let getmsg = fs.readFileSync(dataPath, 'utf-8')
        let arr = JSON.parse(getmsg)
        let id = arr[0] ? arr[0].id + 1 : 1
        let data = {
            id,
            name,
            content,
            "dt": Date.now()
        }
        arr.unshift(data)
        fs.writeFileSync(dataPath, JSON.stringify(arr))
    }
}