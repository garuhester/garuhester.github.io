## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-fe9176f47f52642a.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<div id="main">
  <div class="txt one">hello</div>
  <div class="txt two">world</div>
</div>
```

css：
```
#main{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:200px;
  height:200px;
  background:#ddd;
  overflow:hidden;
}
.txt{
  position:absolute;
  width:200px;
  height:200px;
  text-align:center;
  line-height:200px;
  transition:all 0.6s;
  top:0;
  left:0;
  font-size:30px;
}
.one{
  background:tomato;
}
.two{
  top:200px;
  background:skyblue;
}
#main:hover .one{
  top:-200px;
}
#main:hover .two{
  top:0;
}
```
>原理：对元素的left属性进行动态的调整，并且在主布局中利用overflow:hidden对超出部分进行隐藏
