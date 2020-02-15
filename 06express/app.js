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

app.listen(3000, () => {
    console.log('Server is running');
})