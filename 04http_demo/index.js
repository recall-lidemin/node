const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

const INDEX_FILE = './view/index.html'
const ERR_FILE = './view/404.html'
const CSS_FILE = './public/css/index.css'
const IMG_FILE = './public/images/1.jpg'
const indexPath = path.join(__dirname, INDEX_FILE)
const errPath = path.join(__dirname, ERR_FILE)
const cssPath = path.join(__dirname, CSS_FILE)
const imgPath = path.join(__dirname, IMG_FILE)


server.on('request', (req, res) => {
    // 获取当前请求的资源地址
    //console.log(req.url);
    // 获取当前请求的方式
    //console.log(req.method);
    // 获取当前请求的查询字符串
    //console.log(req.search);
    // 获取访问的IP地址
    console.log(req.connection.remoteAddress);
    // 如果用户请求的是 /index ,读取内容并返回
    res.setHeader('Content-Type', 'text/html;charset=utf8')

    // if (req.url !== '/index') {
    //     fs.readFile(errPath, (err, data) => {
    //         if (err) {
    //             return res.end('Server error')
    //         }
    //         res.end(data)
    //     })
    // }
    if (req.url === '/index') {
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    } else if (req.url === '/public/css/index.css') {
        const cssdata = fs.readFileSync(cssPath)
        res.setHeader('Content-Type', 'text/css')
        res.end(cssdata)
    } else if (req.url === '/public/images/1.jpg') {
        const imgdata = fs.readFileSync(imgPath)
        res.setHeader('Content-Type', 'img/jpg')
        res.end(imgdata)
    } else {
        fs.readFile(errPath, (err, data) => {
            if (err) {
                return res.end('Server error')
            }
            res.end(data)
        })
    }





})

server.listen(3000, () => {
    console.log('Server is running');
})

// 地址栏输入url到显示经历了什么?
// 1.域名解析:把域名翻译成IP地址,称为DNS寻址(不是每次都做，也有缓存机制)
//    1.1 向DNS服务器发送请求
//    1.2 DNS服务器返回IP地址
// 2.与返回的IP地址主机建立连接,称为TCP的三次握手
//    2.1 本机---在吗--->IP地址主机
//        本机<---在---IP地址主机
//        本机---好--->IP地址主机
// 3.连接成功,发送请求
// 4.服务器收到请求,处理,返回响应
// 5.浏览器处理响应结果
//    5.1 如果是一个.html,则进一步做页面渲染
//    5.2 其他处理