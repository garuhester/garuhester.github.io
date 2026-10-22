## 添加管理员
使用命令mongo进入命令行
创建第一个用户，该用户需要有用户管理权限
这里设置其角色为root
```
> use admin
> db.createUser({user:"admin",pwd:"password",roles: [{ role: "root", db: "admin" }]})
```
新增的用户在system.users中
```
> db.getCollectionNames()
[ "system.indexes", "system.users", "system.version" ]
```
第一个用户添加完成后，便需要认证才能继续添加其他用户
使用db.auth("admin", "password")认证

---

## 添加数据库用户
为其他数据库添加用户，添加用户前需要切换到该数据库
这里设置其角色为dbOwner
```
> use testdb1
> db.createUser({user: "testdb1u1", pwd: "xyz123", roles: [{ role: "dbOwner", db: "testdb1" }]})
```

---

## 查看用户
```
> use admin
> db.system.users.find()
```
