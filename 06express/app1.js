// 加载express模块，该框架是对http的增强
const express = require('express')
const bodyParser = require('body-parser')
// 处理文件上传
const multer = require('multer')

const app = express()

// 托管静态资源,忽略前缀
//app.use(express.static('./static'))
// 托管静态资源,限制前缀
app.use('/static/', express.static('./static'))

// 配置body-parser
app.use(bodyParser.urlencoded({
    extended: false //处理普通键值对格式
}))
app.use(bodyParser.json()) //处理Json格式数据

// 配置multer，处理文件上传
const upload = multer({
    dest: './upload'
})
// 路由
// http://127.0.0.1:3000/add?id=1
app.get('/add', (req, res) => {
    // express框架封装了很多req的属性和方法
    console.log(req.url); //请求地址 /add?id=1
    console.log(req.query); //请求url中的查询字符串(对象)部分 { id: '1' }
    console.log(req.path); //请求资源路径 /add
    console.log(req.ip); //发出请求的IP地址
    console.log(req.protocol); //协议

    // res.send是express框架对res.end的增强
    // res.sendStatus(200)
    res.send()
})
// 普通键值对
app.post('/add', (req, res) => {
    res.send(req.body);
})
// 文件上传
app.post('/upload', upload.single('cover'), (req, res) => {

    res.send({
        "data": req.body,
        "file": req.file
    })
})
// JSON格式数据，不是普通键值对
app.post('/json', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Server is running');
})