### 有如下数组：
```
var arr = [ 
  { 
    id: 1,
    name: "a",
    time: "2017-11-22T06:28:13.615Z"
  },
  { 
    id: 2,
    name: "b",
    time: "2017-11-22T06:30:13.615Z"
  },
  { 
    id: 3,
    name: "c",
    time: "2017-11-22T06:32:13.615Z"
  }
]
```
### 根据数组中每个对象的id进行排序
```
arr.sort((a, b) => b.id - a.id);
```
等价于:
```
arr.sort(function(a,b){
  return b.id - a.id;
});
```

### 根据数组中每个对象的time进行排序
```
arr.sort((a, b) => new Date(b.time) - new Date(a.time));
```
等价于:
```
arr.sort(function(a,b){
  return new Date(b.time) - new Date(a.time);
});
```
