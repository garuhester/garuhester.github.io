在以下实例中，总模块为`Garu`，子模块为`World`和`Render`
即：
`Garu`
| - `World`
| - `Render`

---

### 写法一：（对象形式）
框架部分：
```
var Garu = {};
Garu.val = "Garu"; // 总模块的变量
Garu.init = function(){ // 总模块的方法
  console.log("Garu init");
}

/*
  Garu.World
*/
Garu.World = {};
(function(){
  var World = Garu.World;
  World.val = "World"; // World子模块的变量
  World.init = function(){ // World子模块的方法
    console.log("Garu.World init");
  }
})();

/*
  Garu.Render
*/
Garu.Render = {};
(function(){
  var Render = Garu.Render;
  Render.val = "Render"; // Render子模块的变量
  Render.init = function(){ // Render子模块的方法
    console.log("Garu.Render init");
  }
})();
```

调用方式：
```
Garu.init(); // 调用总模块的方法
console.log(Garu.val); // 调用总模块的变量

var World = Garu.World;
World.init(); // 调用子模块的方法
console.log(World.val); // 调用子模块的变量

var Render = Garu.Render;
Render.init();
console.log(Render.val);
```

### 写法二：（类+原型链+对象形式）
框架部分：
```
var Garu = (function(){
  function Garu(){
    this.val = "garu"; // 总模块的变量
  }
  
  Garu.prototype.init = function(){ // 总模块方法
    console.log("Garu init");
  }
  
  var World = Garu.prototype.World = {};
  World.val = "World"; // World子模块的变量
  World.init = function(){ // World子模块的方法
    console.log("Garu.World init");    
  }
  
  var Render = Garu.prototype.Render = {};
  Render.val = "Render"; // Render子模块的变量
  Render.init = function(){ // Render子模块的方法
    console.log("Garu.Render init");    
  }
  
  return Garu;
})();
```

调用方式：
```
var Garu = new Garu();
Garu.init();
console.log(Garu.val);

var World = Garu.World;
World.init();
console.log(World.val);

var Render = Garu.Render;
Render.init();
console.log(Render.val);
```







