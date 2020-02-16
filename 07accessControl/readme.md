# 会话
- 思路：
- 在访问服务器，带上一个凭据，给这个服务器来检查
  - 1.访问一个登陆页，成功之后，服务器给一个**凭据**
  - 2.浏览器拿着这个**凭据**去访问主页
  - 3.主页收到请求之后，检查**凭据**
## cookie
 ### cookie
 - 服务器向浏览器上写入凭据
 - 在访问**本网站**其他页面时，就会自动带上这个凭据(cookie),它保存在一个叫cookie的请求头中

### 实现

- 写入cookie

  - node设置一个 set-cookie 头 res.setHeader('set-cookie', 'name=curry') 
  - express 设置一个cookie，res.cookie('age', '18') 

- 获取cookie

  - 凭据会自动保存在 req.headers.cookie (字符串)
  - 利用第三方包cookie-parser,res.cookies(对象)

- 删除cookie

  - res.clearcookie

- 设置cookie有效期

  ```js
  res.cookie('name','curry',{expires:new Date(Date.now()+1000*10)})
  ```

### 特点

- 只要有请求，请求头就会带上cookie

### cookie身份认证



## session

### 区别

- 基于cookie，不把真实数据放在浏览器，只是放一把钥匙，真实数据在服务器

- 收到请求，拿着钥匙来服务器找真实数据

### 使用

- 安装express-session

  - `const session = require('express-session');`

- 配置

  - ```js
    let conf = {
      secret: '4ey32erfyf3fgpg', //加密字符串。 使用该字符串来加密session数据，自定义
      resave: false, //强制保存session即使它并没有变化
      saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
      //设定属性或值时，它就处于未初始化状态。
    };
    //3. 注册为express-session中间件
    app.use(session(conf));
    ```

- 设置

  - req.session.属性名 = 属性值

- 获取

  - req.session.属性名

- 销毁

  - req.session.destroy()