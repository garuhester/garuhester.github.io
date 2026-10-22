- #连接数据库
```
mongo //连接本机
mongo ip //连接远程服务
```
---
- #显示所有数据库
```
show dbs
show databases
```
---
- #使用数据库
```
use 数据库名称
```
---
- #查看表
```
show tables
```
---
- #插入数据
```
db.<tableName>.insert()
// db.users.insert({name:"abc",age:20,...})
```
---
- #查询表数据
```
db.<tableName>.find()
```
---
- #修改表数据
```
db.<tableName>.update()
// db.users.update({name:"abc"},{$set:{age:20}})
```
---
- #删除表数据
```
db.<tableName>.remove()
// db.users.remove({name:"abc"})
// 删除全部：db.users.remove({})
```
---
- #删除表
```
db.users.drop()
```
---
- #删除数据库
```
db.dropDatabase()
```
