var fs = require('fs')
// Express提供了一种包装路由的方式
var express = require('express')
// 使用Router方法创建一个路由容器
var router = express.Router()
// 把路由都挂载到容器上
router.get('/', function (req, res) {
    fs.readFile('./db/db.json', 'utf-8', function (err, data) {
        if (err) {
            // return res.status(500).send('Server error')
            return console.log(err);

        }
        res.render('index.html', {
            students: JSON.parse(data).students
        })
    })
})
// 导出路由容器router
module.exports = router

// 传统导出方法

// module.exports = function (app) {
//     app.get('/', function (req, res) {
//         fs.readFile('../db.json', 'utf-8', function (err, data) {
//             if (err) {
//                 return res.status(500).send('Server error')
//             }
//             res.render('index.html', {
//                 students: JSON.parse(data).students
//             })
//         })
//     })

// }