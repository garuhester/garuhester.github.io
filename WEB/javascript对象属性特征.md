javascript对象有三个特征：
1. 可写：writable
2. 可配置：configurable
3. 可枚举：enumerable

---

下面通过例子来解析他们的作用
- ### 首先写一个对象：
```
var person = {
  name:"hester",
  age:17
}
```

- ### 列举对象属性的特征`getOwnPropertyDescriptor`：
```
var info = Object.getOwnPropertyDescriptor(person,"name");
console.log(info);
//{"value":"hester","writable":true,"enumerable":true,"configurable":true}
```

- ### writable特征：
```
console.log(person.name); // hester
Object.defineProperty(person,"name",{writable:false});
person.name = "jack";
console.log(person.name); // hester
```
>属性设置writable为false后，不可修改该属性的值

- ### configurable特征：
```
Object.defineProperty(person,"name",{configurable:false});
```
>属性设置configurable为false后：
1.不可设置configurable为true；
2.不可设置enumerable（true为false 和 false为true均不可以）；
3.**不可设置writable由false为true，可设置writable由true为false**

- ### enumerable特征：
```
for(var p in person){
  console.log(p);
} // name，age 
Object.defineProperty(person,"name",{enumerable:false});
for(var p in person){
  console.log(p);
} // age
console.log(person.name); // hester
```
>属性设置enumerable为false后，不可被枚举出来，比如for...in循环等。但是可以访问

检查属性的enumerable特征状态
```
person.propertyIsEnumerable("name"); // false
```
