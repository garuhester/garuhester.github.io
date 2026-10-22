```
var obj = {
    name: "abc",
    age: 20
}

obj = new Proxy(obj, {
    get(target, key) {
        if (key == "age") {
            return target[key] + "岁";
        }
        return target[key];
    },
    set(target, key, value) {
        if (key == "name" && typeof value != "string") {
            throw Error("name字段必须为string类型")
        }
        target[key] = value;
    }
})

console.log(obj.age) //20岁
obj.name = "garu"
console.log(obj.name) //garu

```
