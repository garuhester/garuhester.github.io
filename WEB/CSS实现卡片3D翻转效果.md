## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-4a6623bf5be198d3.gif?imageMogr2/auto-orient/strip)

## 代码：
html：
```
<div class="main">
  <div class="box b1"></div>
  <div class="box b2"></div>
</div>
```
css：
```
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%,-50%);
  -webkit-perspective: 1500;
  -moz-perspective: 1500;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  transition: all 1s;
  backface-visibility: hidden;
  border-radius: 10px;
  cursor: pointer;
}
.b1{
  background:skyblue;
}
.b2 {
  background:tomato;
  transform: rotateY(-180deg);
}
```
javascript：
```
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");

b1.onclick = function() {
  b1.style.transform = "rotateY(180deg)";
  b2.style.transform = "rotateY(0deg)";
}

b2.onclick = function() {
  b2.style.transform = "rotateY(-180deg)";
  b1.style.transform = "rotateY(0deg)";
}
```

>-webkit-perspective：透视效果
  backface-visibility：隐藏被旋转的 div 元素的背面
