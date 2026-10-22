## 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-a4f8b6e96abe46c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 实现：
- **方法一**：

html：
```
<div class="main">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>  
  <div class="box"></div>  
  <div class="box"></div>  
</div>
```
css：
```
.main{
  text-align:justify;
  text-align-last:justify;
}
.box{
  width:50px;
  height:50px;
  background:tomato;
  border-radius:50%;
  display:inline-block;
}
```

- **方法二（兼容性好）**：

html：
```
<div class="main">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>  
  <div class="box"></div>  
  <div class="box"></div>  
</div>
```
css：
```
.main{
  text-align:justify;
}
.main::after{
  content:'';
  display:inline-block;
  width:100%;
}
.box{
  width:50px;
  height:50px;
  background:tomato;
  border-radius:50%;
  display:inline-block;
}
```
