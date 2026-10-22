## 写法一：
```
class Person{
  constructor(){
    this.a = 2;
    this.load = {};
    this.load.image = function(){

    }
  }

  show(){
    console.log(this.a);
  }
}

Person.show2 = function(a){
    console.log(a)
}
Person.show3 = {};
Person.a = "123";
```

## 写法二：
```
function Person(){
    this.a = 2;
    this.load = {};
    this.load.image = function(){

    }
    this.show = function(){
        console.log(this.a);
    }
}

Person.show2 = function(a){
    console.log(a)
}
Person.show3 = {};
Person.a = "123";
```

## 写法三：
```
var Person = (function(){
    function Person(){
        this.a = 2;
    }

    Person.prototype.load = {}
    Person.prototype.load.image = function(){
        
    }

    Person.prototype.show = function(){
        console.log(this.a);
    }

    return Person;

})();

Person.show2 = function(a){
    console.log(a)
}
Person.show3 = {};
Person.a = "123";
```

---

## 继承：
```
class p extends Person{
  constructor(){
    super();
    this.b = 3;
  }
  init(){
    console.log(this.load)
  }
}
```

---

## 调用方式：
```
new p().init(); // {image: ƒ}
new Person().show(); // 2
new Person.show2(10); // 10
console.log(Person.show3); // {}
console.log(Person.a); // 123
```
