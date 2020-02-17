## MySql
 - 增
   - `insert into tableName values(全部值一一对应字段)`
   - `insert into tableName(字段名1,字段名2,...) values(值1,值2,...)`
 - 删
   - `delete * from tableName where 条件`
 - 改
   - `update tableName set 字段名=修改内容 where 条件`
 - 查
   - `select * from tableName`
   - `select * from tableName where 条件`
   - `select 字段1,字段2,... from tableName where 条件1 and 条件2` 
   - `group by 字段分组`
     `order by 字段 [ASC升序|DESC降序]`
     `between ... and ...`

## 在Node中操作sql
