## 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-579346183178bcf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<p>OR</p>
```
css：
```
p{
  text-align:center;
  position:relative;  
}
p::before{
  content:'';
  width:45%;
  height:1px;
  background:#000;
  position:absolute;
  left:10px;
  top:50%;
}
p::after{
  content:'';
  width:45%;
  height:1px;
  background:#000;
  position:absolute;
  right:10px;
  top:50%;
}
```
