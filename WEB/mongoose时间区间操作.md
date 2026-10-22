1. 大于某个时间
```
db.things.find({
  "createTime":{
    "$gt":"2018-5-21 0:0:0"
  }
});
```
2. 大于等于某个时间
```
db.things.find({
  "createTime":{
    "$gte":"2018-5-21 0:0:0"
  }
});
```
3. 小于某个时间
```
db.things.find({
  "createTime":{
    "$lt":"2018-5-21 0:0:0"
  }
});
```
4. 小于等于某个时间
```
db.things.find({
  "createTime":{
    "$lte":"2018-5-21 0:0:0"
  }
});
```
5. 某个时间段
```
db.things.find({
  "$and":[{
    "createTime":{
      "$gt":"2018-5-21 0:0:0"
    }
  },{
    "createTime":{
      "$lt":"2018-5-22 0:0:0"
    }
  }]
});
```
