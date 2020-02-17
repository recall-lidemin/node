const sql = require('./sqlutil')

let str = `select * from user where name="李德民"`
sql.sqlbuff(str, (err, data) => {
    if (err) {
        return console.log('err');
    }
    console.log(data);
})