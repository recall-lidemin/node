const fs = require('fs')
const path = require('path')

const USERDATA = 'user.json'
const userPath = path.join(__dirname, USERDATA)

module.exports = {
    get() {
        let user = fs.readFileSync(userPath, 'utf-8')
        let arr = JSON.parse(user)
        return arr
    },
    reg(userName, passWord) {
        let userData = fs.readFileSync(userPath, 'utf-8')
        let arr = JSON.parse(userData)

        let user = {
            userID: Date.now() + Math.random(),
            userName,
            passWord,
            dt: Date.now()
        }

        arr.unshift(user)
        console.log(arr);

        fs.writeFileSync(userPath, JSON.stringify(arr))

    }
}