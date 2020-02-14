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

    },
    login(userName, passWord) {
        let userData = fs.readFileSync(userPath, 'utf-8')
        let arr = JSON.parse(userData)
        let newarr = arr.filter(item => {
            if (item.userName === userName && item.passWord === passWord) {
                return true
            }
        });

        console.log(newarr);

        let login = {
            msg: '',
            data: newarr
        }
        if (!newarr) {
            login.msg = '用户名不存在'
        }
        login.msg = '登陆成功'
        return login
    }
}