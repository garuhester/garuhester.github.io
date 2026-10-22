首先从字面意思来看：
`preventDefault`是指**阻止默认事件**
`stopPropagation`是指**停止传播**

javascript中的两种“事件传播”模式：

- 捕获模式(capturing)：当事件发生时，该事件首先被最外层元素接受到，然后依次向内层元素传播。（从上向下，由外往里）
- 冒泡模式(bubbling)：当事件发生时，该事件首先被最内层元素接受到，然后依次向外层元素传播。（从下向上，由里往外）

---

# preventDefault：
html：
```
<a href="http://www.baidu.com" id="open">open</a>
```
javascript：
```
document.getElementById("open").addEventListener("click",function(e){
  console.log("in");
},true);
```

直接点击open，控制台会先输出in，然后跳转到百度的页面，在这里，a标签的默认事件是跳转页面，click事件是我们自己添加的事件。

如果想只执行我们添加的事件而不进行跳转，这时候需要添加`preventDefault`来阻止a标签的默认事件
```
document.getElementById("inner").addEventListener("click",function(e){
  e.preventDefault();
  console.log("in");
},true);
```

这是点击open，只会在控制台输出in

---

# stopPropagation：
html：
```
<div class="out">
  out
  <div class="middle">
    middle
    <div class="in">in</div>
  </div>
</div>
```

css：
```
.out{
  width:300px;
  height:300px;
  border:1px solid #000;
  padding:10px;
  box-sizing:border-box;
  background:#ddd;
}
.middle{
  width:200px;
  height:200px;
  border:1px solid #000;
  padding:10px;
  box-sizing:border-box;
  background:skyblue;
}
.in{
  width:100px;
  height:100px;
  border:1px solid #000;
  padding:10px;
  box-sizing:border-box;
  background:tomato;
}
```

javascript：
```
document.querySelector(".out").addEventListener("click",function(e){
  console.log("out");
},false);

document.querySelector(".middle").addEventListener("click",function(e){
  console.log("middle");
},false);

document.querySelector(".in").addEventListener("click",function(e){
  console.log("in");
},false);
```

效果：

![](http://upload-images.jianshu.io/upload_images/2381669-0b95d6976ea01ec6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>注意现在addEventListener的最后一个参数为false，为冒泡模式，即由里往外传播

这时点击红色区域（最里层in）
控制台输出：

![](http://upload-images.jianshu.io/upload_images/2381669-316f14dca05ae7b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看出事件**由里往外**传播（in -> middle -> out）
如果这时候需要只显示in，而不向外传播，就可以给in对应的标签事件使用`stopPropagation`
```
document.querySelector(".in").addEventListener("click",function(e){
  e.stopPropagation();
  console.log("in");
},false);
```
控制台输出：

![](http://upload-images.jianshu.io/upload_images/2381669-705743c0a255842b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 现在我们将三个元素的addEventListener的最后一个参数改为true，这时候事件模式为捕获模式，即由外向里传播
```
document.querySelector(".out").addEventListener("click",function(e){
  console.log("out");
},true);

document.querySelector(".middle").addEventListener("click",function(e){
  console.log("middle");
},true);

document.querySelector(".in").addEventListener("click",function(e){
  console.log("in");
},true);
```
这时点击红色区域（最里层in）
控制台输出：

![](http://upload-images.jianshu.io/upload_images/2381669-e3af1b2ea723fb9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看出事件**由外往里**传播（out -> middle -> in）
如果这时候需要只显示out，而不向外传播，就可以给out对应的标签事件使用`stopPropagation`
```
document.querySelector(".out").addEventListener("click",function(e){
  e.stopPropagation();
  console.log("out");
},true);
```
控制台输出：

![](http://upload-images.jianshu.io/upload_images/2381669-61b9d25710d5630b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
