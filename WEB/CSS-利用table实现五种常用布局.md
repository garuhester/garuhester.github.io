## 布局一：
- 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-ba836f0ce27fff6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码：

html：
```
<div class="header">header</div>
<div class="main">main</div>
<div class="footer">footer</div>
```
>注意：div中要有内容，不然显示不出来

css：
```
body{
  margin:0;
  padding:0;
  width:100%;
  min-height:100vh;
  display:table;
  text-align:center;
}
.header,.main,.footer{
  display:table-row;
}
.header{
  height:50px;
  background:tomato;
}
.main{
  background:skyblue;
}
.footer{
  height:50px;
  background:#9d70ff;
}
```
---
## 布局二：
- 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-4edf6a20d6765f71.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码：

html：
```
<div class="header">header</div>
<div class="main">
  <div class="left">left</div>
  <div class="right">right</div>
</div>
<div class="footer">footer</div>
```

css：
```
body{
  margin:0;
  padding:0;
  width:100%;
  min-height:100vh;
  display:table;
  text-align:center;
}
.header,.main,.footer{
  display:table-row;
}
.header{
  height:50px;
  background:tomato;
}
.main{
  width:100%;
  display:table;
  height:calc(100vh - 100px);
}
.main .left{
  width:300px;
  display:table-cell;
  background:#fcea96;
}
.main .right{
  display:table-cell;
  background:skyblue;
}
.footer{
  height:50px;
  background:#9d70ff;
}
```
>注意：.main的height属性中的100px是header和footer的高度之和
---
## 布局三：
- 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-030da976a77916bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码：

html：
```
<div class="left">left</div>
<div class="right">
  <div class="header">header</div>
  <div class="main">main</div>
  <div class="footer">footer</div>
</div>
```

css：
```
body{
  margin:0;
  padding:0;
  min-height:100vh;
  display:table;
  text-align:center;
}
.left{
  display:table-cell;
  width:200px;
  background:tomato;
}
.right{
  display:table;
  width:calc(100vw - 200px);
  height:100vh;
}
.header,.main,.footer{
  display:table-row;
}
.header{
  height:50px;
  background:skyblue;
}
.main{
  background:#fcea96;
}
.footer{
  height:50px;
  background:#9d70ff;
}
```
---
## 布局四（双栏布局，例子为左边固定，右边自适应）：
- 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-7fe1865c8a2c89ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码：

html：
```
<div class="left">left</div>
<div class="right">right</div>
```

css：
```
body{
  margin:0;
  padding:0;
  width:100%;
  height:100vh;
  display:table;
  text-align:center;
}
.left,.right{
  display:table-cell;
}
.left{
  width:300px;
  background:tomato;
}
.right{
  background:skyblue;
}
```
---
## 布局五（三栏布局，例子为左边固定，右边固定，中间自适应）：
- 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-984a426a750175f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码：

html：
```
<div class="left">left</div>
<div class="middle">middle</div>
<div class="right">right</div>
```

css：
```
body{
  margin:0;
  padding:0;
  width:100%;
  height:100vh;
  display:table;
  text-align:center;
}
.left,.middle,.right{
  display:table-cell;
}
.left{
  width:300px;
  background:tomato;
}
.middle{
  background:#ffe69e;
}
.right{
  width:200px;
  background:skyblue;
}
```


