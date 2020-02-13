const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const msg = require('./msg')
const querystring = require('querystring')

const server = http.createServer()

// 开放public目录
const STATIC_FILE = 'public'

// 策略编程，统一定义返回类型
const headerMap = {
    ".js": "application/x-javascript",
    ".html": "text/html",
    ".css": "text/css",
    ".png": "application/x-png",
    ".jpg": "application/x-jpg",
}

server.on('request', (req, res) => {
    // 处理请求地址
    let urlPath = url.parse(req.url, true)

    // 判断是否为接口，如果是接口，执行接口代码
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
        // post获取参数是一段一段的获取
        // data事件获取传参，一段时间执行一次
        req.on('data', buf => {
            result += buf
        })
        // data结束后，全部获取完成后执行end事件
        req.on('end', () => {
            // 解析接收完成后的参数,把查询字符串转成对象
            //  querystring.parse使用querystring模块的parse方法
            let resObj = querystring.parse(result)
            // 编程思想，尽可能早的结束代码
            if (!resObj) {
                return
            }
            // 调用操作数据的方法
            msg.add(resObj.name, resObj.content)

            let data = {
                code: 200,
                msg: "添加成功"
            }
            res.setHeader('content-type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(data))
        })
    }
    // 否则执行请求本地静态资源
    else {
        const staticPath = path.join(__dirname, STATIC_FILE, req.url)
        try {
            let static = fs.readFileSync(staticPath, 'utf-8')
            // 获取请求的后缀名 path.extname
            // 策略模式，统一设置返回类型
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