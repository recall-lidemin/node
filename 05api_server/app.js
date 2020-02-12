const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const msg = require('./msg')

const server = http.createServer()

const STATIC_FILE = 'static'

const headerMap = {
    ".js": "application/x-javascript",
    ".html": "text/html",
    ".css": "text/css",
    ".png": "image/png",
}


server.on('request', (req, res) => {

    let urlPath = url.parse(req.url, true)
    // 如果是接口，执行接口代码
    if (urlPath.pathname === '/getMessage' && req.method === 'GET') {
        let result = {
            code: 200,
            data: msg.get()
        }
        res.setHeader('content-type', 'application/json;charset=utf-8')
        res.end(JSON.stringify(result))

    }
    // 否则执行
    else {
        const staticPath = path.join(__dirname, STATIC_FILE, req.url)
        try {
            let static = fs.readFileSync(staticPath, 'utf-8')
            // 获取请求的后缀名
            let extName = path.extname(req.url)
            if (headerMap[extName]) {
                res.setHeader('content-type', headerMap[extName])
            }
            res.end(static)
        } catch (error) {
            res.setHeader("content-type", "text/html;charset=utf-8")
            res.statusCode = 404;
            res.end(`${req.url} 没有找到`)
        }
    }
})

server.listen(3000, () => {
    console.log('Server is running');
})