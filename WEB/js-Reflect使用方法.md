```
var obj2 = {
    name: "abc"
}

var obj3 = {
    name: ""
}

Reflect.set(obj2, "name", "123")
Reflect.set(obj2, "name", "234", obj3)
console.log(obj2);//{name:"123"}
console.log(obj3);//{name:"234"}
console.log(Reflect.get(obj2, "name"));//123
console.log(Reflect.has(obj2, "name"));//true

function Person(name) {
    this.name = name;
}
var p = Reflect.construct(Person, ["jack"]);//new Person("jack")
console.log(p.name);//jack
```
