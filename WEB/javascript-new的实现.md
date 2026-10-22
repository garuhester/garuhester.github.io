## 创建一个对象：
```
function Person(name) {
    this.name = name;
}

var p = new Person("xiaohu");
```

## new的实现：
```
var obj = {};
obj.__proto__ = Person.prototype;
var result = Person.call(obj,"hester");
return typeof result === 'obj'? result : obj;
```
