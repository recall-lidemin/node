const express = require('express')
const router = require('./router/userRouter')

const app = express()

// 托管静态资源
app.use(express.static('./static'))

app.use(router)

app.listen(3000, () => {
    console.log('Server is running');
})