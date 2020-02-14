# 初始化
- 模板渲染

# 路由设计

## students(增删改查)

|TYPE  |     URL  | Parameter(get)| 	  Parameter(post)    | 返回值
|------|----------|---------------|--------------------------|------------------
|GET   |   /      |               |                          | 请求主页
|GET   |   /add   |               |                          | 请求添加学生页面
|GET   |   /query |               |                 	   	 | 所有学生信息Object
|POST  |   /add   |               | name ,gender,age,hobbies | 返回值Object
|POST  |   /edit  |               | name ,gender,age,hobbies | 返回值Object
|GET   |   /del   |     id        | 						 | 返回值Object