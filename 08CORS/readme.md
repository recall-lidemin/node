# 跨域

## 模拟跨域问题
 - app3000.js和app8080.js模拟了跨域问题，端口号不同，导致的不同源

## 实践中，我们的页面和接口代码在不同的服务器上，着就会产生跨域的问题

## 解决方案

### JSONP
 - jQuery封装的JSONP
   - 前端发ajax请求指定数据类型dataType:"jsonp"
   - 使用express框架的服务器端返回使用 res.jsonp({})
 - 原理
   - script标签的src属性可以请求外部的文件，可以发送跨域请求
   - 借助script标签的src属性请求服务器上的接口
   - 服务器返回JavaScript脚本，并附上要返回的数据
 