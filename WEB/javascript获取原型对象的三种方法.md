## 代码：
```
function Person(name){
    this.name=name;
}
var p = new Person("abc");
```

## 获取p的原型对象
- 方法一：
```
p.__proto__
```

- 方法二：
```
p.constructor.prototype
```

- 方法三：
```
Object.getPrototypeOf(p)
```
