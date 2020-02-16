const express = require('express')

const app = express()

app.use(express.static('./static'))

app.get('/get', (req, res) => {
    res.send({
        code: 200
    })
})

app.listen(3000, err => {
    console.log('Server is running');
})