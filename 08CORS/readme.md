# 跨域

## 模拟跨域问题
 - app3000.js和app8080.js模拟了跨域问题，端口号不同，导致的不同源

## 实践中，我们的页面和接口代码在不同的服务器上，着就会产生跨域的问题

## 解决方案

### JSONP(只能发get)
 - jQuery封装的JSONP
   - 前端发ajax请求指定数据类型dataType:"jsonp"
   - 使用express框架的服务器端返回使用 res.jsonp({})
 - 原理
   - script标签的src属性可以请求外部的文件，可以发送跨域请求
   - 借助script标签的src属性请求服务器上的接口
   - 服务器返回JavaScript脚本，并附上要返回的数据

### CORS

 - 手动设置请求头`res.setHeader('Access-Control-Allow-Origin', '*')`
 - 跨域错误，缺少需要的响应头
   - 跨域ajax，浏览器可以正常发出请求，服务器可以正常收到请求，并做出响应，但在浏览器收到服务器响应后，由于他是跨域的，所有要进一步检查这个请求是否安全，实际就是看有没有特殊的响应头`Access-Control-Allow-Origin`，如果没有，就报错
   - 解决方案：在服务器端做出响应时，设置一个特殊响应头`Access-Control-Allow-Origin`，指定其值

### 二者区别
 - CORS
   - 可以处理所有请求类型
   - 有浏览器限制
   - 只需要改后端，前端不需要改
 - JSONP
   - 只处理get
   - 没有浏览器限制
   - 前后端都需要改动，前端dataType:'jsonp',后端res.jsonp({})