## 存储：
```
var arr = [1,2,3];
var str = JSON.stringify(arr);
localStorage.setItem("items", str);
```

## 读取：
```
var items = localStorage.getItem("items");
var arr = JSON.parse(items);
```
