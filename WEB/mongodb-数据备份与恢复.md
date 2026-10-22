# 1. 方法一
```
//导出表
mongoexport -d DataBaseName -c users -o DataBaseName.dat

//导入表
mongoimport -h 127.0.0.1:27017 -d DataBaseName2 -c users DataBaseName.dat
```

# 2. 方法二
## 备份：
```
//备份单个表
mongodump -u username -p 123456 --port 27017 --authenticationDatabase admin -d DataBaseName -c CollectionsName -o ./data

//备份单个库
mongodump -u username -p 123456 --port 27017 --authenticationDatabase admin -d DataBaseName -o ./data

//备份所有库
mongodump -u username -p 123456 --port 27017 --authenticationDatabase admin -o ./data
```
## 恢复：
```
//恢复单个表
mongorestore -u username -p 123456 --port 27017 --authenticationDatabase admin -d DataBaseName -c CollectionsName ./data/DataBaseName/CollectionsName.bson

//恢复单个库
mongorestore -u username -p 123456 --port 27017 --authenticationDatabase admin -d DataBaseName ./data/DataBaseName

//恢复所有库
mongorestore -u username -p 123456 --port 27017 --authenticationDatabase admin ./data
```
