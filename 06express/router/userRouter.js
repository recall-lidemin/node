const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const user = require('../util/user')
const session = require('express-session')

const router = express.Router()
let conf = {
    secret: '4ey32erfyf3fgpg', //加密字符串。 使用该字符串来加密session数据，自定义
    resave: false, //强制保存session即使它并没有变化
    saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
    //设定属性或值时，它就处于未初始化状态。
};

// 配置multer
const upload = multer({
    dest: './upload'
})
// 配置 body-parser
router.use(bodyParser.urlencoded({
    extended: false
}))
//3. 注册为express-session中间件
router.use(session(conf));

router.post('/add', upload.single('cover'), (req, res) => {

    let userdata = {
        id: Date.now() + Math.random(),
        name: req.body.name,
        password: req.body.password,
        coverPath: req.file.path
    }
    user.add(userdata, err => {
        if (err) {
            res.send({
                code: 500,
                msg: err
            })
        }
        res.send({
            code: 200,
            msg: '注册成功'
        })
    })
})

router.post('/login', (req, res) => {
    let {
        name,
        password
    } = req.body
    user.login(name, password, (err, data) => {
        if (err) {
            return res.send(err)
        }
        req.session.isLogin = true
        req.session.name = name
        res.send(data)
    })
})

router.get('/getInfo', (req, res) => {

    if (!req.session.isLogin) {
        return res.send({
            code: 400,
            msg: '未登陆'
        })
    }
    res.send({
        code: 200,
        data: {
            name: req.session.name
        },
        msg: '用户已登陆'
    })

})
// 退出就是删除session
router.get('/loginOut', (req, res) => {
    req.session.destroy()
    res.send({
        code: 200,
        msg: '删除成功'
    })
})

module.exports = router