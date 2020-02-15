// 加载express模块，该框架是对http的增强
const express = require('express')

const app = express()

// 托管静态资源
app.use('/static/', express.static('./static'))

// 路由

app.get('/', (req, res) => {
    // res.send是express框架对res.end的增强
    res.send({
        "a": 1
    })
})

app.listen(3000, () => {
    console.log('Server is running');
})