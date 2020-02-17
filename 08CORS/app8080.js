const express = require('express')

const app = express()

app.use(express.static('./static'))

// 配置中间件，集中处理CORS跨域设置请求头
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
    next()
})

app.get('/getApi', (req, res) => {
    // 允许所有人访问(不安全)
    // res.setHeader('Access-Control-Allow-Origin', '*')

    // 手动设置请求头，解决跨域，访问控制，自己设置允许哪些人访问
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')

    res.json({
        code: 200
    })
})

app.get('/jsonp', (req, res) => {
    // 允许所有人访问(不安全)
    // res.setHeader('Access-Control-Allow-Origin', '*')

    // 手动设置请求头，解决跨域，访问控制，自己设置允许哪些人访问
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')

    res.jsonp({
        code: 200
    })
})

app.post('/postApi', (req, res) => {
    // 允许所有人访问(不安全)
    // res.setHeader('Access-Control-Allow-Origin', '*')

    // 手动设置请求头，解决跨域，访问控制，自己设置允许哪些人访问
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')

    res.json({
        code: 200
    })
})

app.listen(8080, err => {
    console.log('Server is running');
})