# node

## 当服务器

- 使用http模块的createServer((req,res)=>{req,res})，会创建一个虚拟服务器

- 所有的请求信息都在req中，通过res设置响应

- req对象中有很多属性和方法

  - req.url：请求url
  - req.method：请求方式

- res对象

  - res.end：结束响应
  - res.setHeader ：设置响应头

- 

  

## 写接口：提供接口服务

* res.end() 参数只能是string或buffer

  ```js
  createServer((req,res)=>{
    if(req.url==='/add'){
       res.setHeader('content-type','application/json;charset=utf-8')
       res.end(JSON.stringify(object))
      }
  })
  ```

* 请求行：请求类型，请求地址，协议

* 请求头：设置请求的一些配置，设置参数

* 请求体：传递的参数，get方法没有请求体

  

* 响应行：协议，状态吗，状态吗说明

* 响应头：告诉浏览器一些信息和设置，该怎么解析响应体内容

* 响应体 ：返回的数据



