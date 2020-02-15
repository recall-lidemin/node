const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const user = require('./util/user')

const app = express()
// 配置multer
const upload = multer({
    dest: './upload'
})
// 托管静态资源
app.use(express.static('./static'))

// 配置 body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))


app.post('/add', upload.single('cover'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
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

app.post('/login', (req, res) => {
    user.login(req.body.name, req.body.password, (err, data) => {
        if (err) {
            return res.status(500).send('server error')
        }
        if (!data) {
            return res.send({
                code: 404,
                msg: '登陆失败'
            })
        }
        res.send({
            code: 200,
            data: data.id,
            msg: '登陆成功'
        })
    })
})

app.get('/getInfo', (req, res) => {
    let id = req.query.id
    console.log(id);

    user.get(id, (err, data) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log('Server is running');
})