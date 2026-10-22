## 一：构造函数创建对象字面量原型图
```
function Person(name) {
    this.name = name;
}
var p = new Person('小胡');
```
![构造函数创建对象字面量原型图](http://upload-images.jianshu.io/upload_images/2381669-d9e8971518598665.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 二：完整对象字面量原型图
```
var obj = { name: '小胡' };
```
![完整对象字面量原型图](http://upload-images.jianshu.io/upload_images/2381669-5e84b6d373386818.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 三：数组原型链
```
var arr = ["a","b","c"];
```
![数组原型链](http://upload-images.jianshu.io/upload_images/2381669-833aded060d1f06f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 四：基本包装类型原型链
```
var str  = new String('str');  // var str = 'str';
```
![基本包装类型原型链](http://upload-images.jianshu.io/upload_images/2381669-f96d8d04c81ce019.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 总结：
根据以上图总结下列规律：
- 除Object以外的所有对象的`prototype`的`__proto__`都指向`Object.prototype`（Object.prototype.__proto__ == null）
- 所有对象的`__proto__`都指向`Function.prototype`
- 所有对象的`prototype`的`constructor`都指向对象本身
