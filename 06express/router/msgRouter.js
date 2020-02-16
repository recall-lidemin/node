const express = require('express')
const msg = require('../util/msg')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.urlencoded({
    extended: false
}))

router.post('/publish', (req, res) => {

    msg.publish(req.body, info => {
        if (info) {
            return res.send({
                code: 400,
                msg: info
            })
        }
        res.send({
            code: 200,
            msg: '发布成功'
        })
    })
})

router.get('/getMsg', (req, res) => {
    msg.getMsg((err, data) => {
        if (err) {
            return res.send({
                code: 400,
                msg: err
            })
        }
        res.send({
            code: 200,
            data: data
        })
    })
})

module.exports = router