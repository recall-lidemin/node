const express = require('express')
const router = require('./router/studentRouter')
const bodyParser = require('body-parser')
const app = express()

// 配置模板引擎
app.engine('html', require('express-art-template'))
// 配置 body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
// 开放公共文件
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// 把路由挂载到app服务中
app.use(router)

app.listen(3000, function () {
    console.log('server is running');
})