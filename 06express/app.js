const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/userRouter')
const message = require('./router/msgRouter')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
// 托管静态资源
app.use(express.static('./static'))

app.use(router)
app.use(message)

app.listen(3000, () => {
    console.log('Server is running');
})