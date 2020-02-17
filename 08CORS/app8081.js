const express = require('express')

const app = express()

app.use(express.static('./static'))


app.get('/jsonp', (req, res) => {

    console.log(req.query);
    // {code:200,msg:'发送成功'}
    let data = {
        code: 200,
        msg: '发送成功'
    }
    res.send(`${req.query.callback}(${JSON.stringify(data)})`)

})

app.listen(8081, err => {
    console.log('server is running');
})