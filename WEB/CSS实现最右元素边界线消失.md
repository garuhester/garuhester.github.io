## 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-92c3801f2003728d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 实现：
html：
```
<div class="main">
  <div class="content">
    <div class="box">第1个</div>
    <div class="box">第2个</div>
    <div class="box">第3个</div>
    <div class="box">第4个</div>
  </div>
</div>
```
css：
```
.box{
  float:left;
  padding:5px;
  border-left:1px solid #000;  
}
```
这里给每个元素都添加了左边框线，可以看到第一个元素有两条边界（一条是自己的，一条是右边元素的），现在要将第一个的左边界线去掉：

![](http://upload-images.jianshu.io/upload_images/2381669-8f5f54ef7dbab406.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

取掉第一个元素的左边界线，修改CSS：
css：
```
.main{
  overflow:hidden;
}
.content{
  margin-left:-1px;
}
.box{
  float:left;
  padding:5px;
  border-left:1px solid #000;  
}
```
>原理：将四个元素整体向左移动一个像素，然后将外容器设置```overflow:hidden```就可以刚好将第一个元素的1px的左边界遮住






