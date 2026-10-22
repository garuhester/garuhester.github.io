## 更新数组：
```
var app = new Vue({
    el:"#app",
    data:{
        users:[
            { "name": "hester", "age": 15},
            { "name": "jack", "age": 17}
        ]
    }
});

//更新操作
function update() {
    /*
    方法：
    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
     */
    app.users.push({ "name": "rose", "age": 20});
}
```
>失效更新方式：
1.利用索引设置值：`app.users[index] = newValue;`
2.修改数组长度：`app.users.length = newLength;`
解决：
1.`Vue.set(app.users,index,newValue);`或`app.users.splice(index,1,newValue);`
2.`app.users.splice(newLength);`
---

## 更新对象：
```
var app = new Vue({
    el:"#app",
    data:{
        user:{
            "name":"hester",
            "age":17
        }
    }
});

//更新操作
function update() {
    //更新一个属性
    Vue.set(app.users, 'age', 27);

    //更新多个属性
    app.users = Object.assign({}, app.users, {
        age: 27,
        gender: 'male'
    });
}
```
