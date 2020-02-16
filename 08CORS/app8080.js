const express = require('express')

const app = express()

app.use(express.static('./static'))

app.get('/getApi', (req, res) => {
    res.jsonp({
        code: 200
    })
})

app.listen(8080, err => {
    console.log('Server is running');
})