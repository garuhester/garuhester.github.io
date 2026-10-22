## 代码：

html：
```
<div class="main">
  <div class="content"></div>
</div>
```
css：
```
body{
  margin:0;
  padding:0;
}
.main{
  width:200px;
  height:200px;
  background:tomato;
}
.content{
  width:100px;
  height:100px;
  background:skyblue;
}
```

效果：

![](http://upload-images.jianshu.io/upload_images/2381669-238af38eb7b13bfb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>原理：一个盒子如果没有上补白(padding-top)和上边框(border-top)，那么这个盒子的上边距会和其内部文档流中的第一个子元素的上边距重叠。

## 解决方法：
**1. 父div设置padding-top**
```
.main{
  ...
  padding-top:1px;
}
```

**2. 父div设置border-top**
```
.main{
  ...
  border-top:1px solid #fff;
}
```

**3. 父div设置overflow（推荐使用）**
```
.main{
  ...
  overflow:hidden;
}
```






