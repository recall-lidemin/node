# Node

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

## Node简介

### 1.node是什么？

- Node是一个基于Chrome V8 引擎得 JavaScript 运行环境
- 将JS代码翻译成了底层得C/C++代码，翻译机

### 2.node特点

- **异步** 非阻塞得I/O（I/O线程池）
  - I/O：input / output 文件得读写、数据库得读写
  - I/O线程池：管理线程，保持线程得连接，外部需要使用某些线程时直接调度对应线程使用
- 特别适用于I/O密集型应用
  - node适用于频繁操作数据库得应用
- 事件循环机制，回调函数
- 单线程(JS也是单线程)
  - node成也单线程，败也单线程
- 跨平台
  - 一处编写，随处可用
  - 不同操作系统都有不同版本得翻译官（不同得node版本）

### 3.node缺点

- 回调函数嵌套太多、太深（回调地狱）
- 单线程，无法利用多核CPU，处理不好CPU密集型(与Java相反，java对CPU密集型友好，处理不好I/O密集型)
- 错误会引起整个应用得推出，应用得健壮性值得考验
- 大量计算占用CPU导致无法继续调用异步I/O

### 4.和传统服务器得区别

- 传统Java服务器，只能一对一服务，一个线程只服务一个请求，多线程，解决高并发，增强服务器配置，部署集群，能多开线程，但是成本高。优势也是一对一，一个线程垮了，不影响其他服务，对CPU密集型友好，请求不明确，但是我一对一，可以一直开线程
- Node服务器，单线程，一对多服务，只有一个线程，高并发，不需要增加配置，成本低，缺点也是单线程，一旦这个线程被压跨，影响全部请求，所有请求都无法处理了，对IO密集型友好，也就是请求很明确，等待算数据



## 知识

- `arguments.callee输出函数本身`

### 1.Node中任何一个模块(JS文件)都被一个外层函数所包裹

- 隐藏内部实现
- 支持 CommonJs模块化

### 2.Node中的 global(相当于浏览器得window)

### 3.Buffer

- 一个类似数组得对象，用于存储数据（二进制数据）
- Buffer得效率很好，存储和读取很快，直接操作内存
- Buffer的大小一旦确定了，不可修改
- 每个元素占用内存得大小为1字节
- Buffer是核心模块，不需下载和引入







