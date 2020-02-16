const express = require('express')
// 用来解析cookie，所有cookie都会附加在req.cookies
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/user', (req, res) => {
    // 检查本次请求是否携带了凭据
    // 凭据会自动保存在 req.headers.cookie
    console.log(req.headers.cookie);
    // 如何把cookie解析出来，从字符串转成对象(利用第三方)
    // 解析之后的
    console.log(req.cookies);
    let {
        name,
        age
    } = req.cookies
    // 所有请求头的信息
    // console.log(req.headers);
    if (!name) {
        return res.send('请登陆')
    }
    res.send(`<h1>你好${name}</h1>`)
})

app.get('/login', (req, res) => {
    // 1.原生方法(nodejs提供)
    res.setHeader('content-type', 'text/html;charset=utf-8')
    // 他是一个响应头，名是 set-cookie,值就是要设置的cookie
    res.setHeader('set-cookie', 'name=curry')
    // 2.express方法
    res.cookie('age', '18')

    res.send('<h1>你好</h1>')
})

app.get('/loginout', (req, res) => {
    // 删除cookie，express提供的res.clearCookie(name)
    res.clearCookie(req.cookies.name)
    res.send(`<h1>退出成功</h1>`)

})

app.listen(3000, err => {
    console.log('Server is runnig');

})