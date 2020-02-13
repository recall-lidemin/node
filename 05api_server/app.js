const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const msg = require('./msg')
const querystring = require('querystring')

const server = http.createServer()

const STATIC_FILE = 'public'

const headerMap = {
    ".js": "application/x-javascript",
    ".html": "text/html",
    ".css": "text/css",
    ".png": "application/x-png",
    ".jpg": "application/x-jpg",
}

server.on('request', (req, res) => {

    let urlPath = url.parse(req.url, true)
    // 如果是接口，执行接口代码
    // /getMessage接口(get)
    if (urlPath.pathname === '/getMessage' && req.method === 'GET') {
        let result = {
            code: 200,
            data: msg.get()
        }
        res.setHeader('content-type', 'application/json;charset=utf-8')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end(JSON.stringify(result))

    }
    // /addMessage 接口(post)
    else if (urlPath.pathname === '/addMessage' && req.method === 'POST') {
        let result = ''

        req.on('data', buf => {
            result += buf
        })
        req.on('end', () => {
            // 解析接收完成后的参数,把查询字符串转成对象
            //  querystring.parse使用querystring模块的parse方法
            let resObj = querystring.parse(result)
            if (!resObj) {
                return
            }
            console.log(resObj);

            msg.add(resObj.name, resObj.content)

            let data = {
                code: 200,
                msg: "添加成功"
            }
            res.setHeader('content-type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(data))
        })
    }
    // 否则执行
    else {
        const staticPath = path.join(__dirname, STATIC_FILE, req.url)
        try {
            let static = fs.readFileSync(staticPath, 'utf-8')
            // 获取请求的后缀名 path.extname
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