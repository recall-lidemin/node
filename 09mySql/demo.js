// 1.引入包
const mysql = require('mysql');

// 2.配置连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345123',
    database: 'mydatabase'
});

// const connection = mysql.createConnection({
//     host: 'bdm289537170.my3w.com', // 你要连接的数据库服务器的地址
//     user: 'bdm289537170', // 连接数据库服务器需要的用户名
//     password: 'ABCabc123', // 连接数据库服务器需要的密码
//     database: 'bdm289537170_db' //你要连接的数据库的名字
// });

// 3.连接
connection.connect();

// 4.执行sql
// connection.query('insert into user(name,PASSWORD) values("li","12345")', (error, results, fields) => {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });


// 5.关闭
connection.end();