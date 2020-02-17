const express = require('express')

const app = express()

app.use(express.static('./static'))

app.get('/getApi', (req, res) => {
    // 允许所有人访问(不安全)
    // res.setHeader('Access-Control-Allow-Origin', '*')

    // 手动设置请求头，解决跨域，访问控制，自己设置允许哪些人访问
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')

    res.json({
        code: 200
    })
})

app.post('/postApi', (req, res) => {
    // 允许所有人访问(不安全)
    // res.setHeader('Access-Control-Allow-Origin', '*')

    // 手动设置请求头，解决跨域，访问控制，自己设置允许哪些人访问
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')

    res.json({
        code: 200
    })
})

app.listen(8080, err => {
    console.log('Server is running');
})