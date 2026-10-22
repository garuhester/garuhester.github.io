## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-47e95eb939e7424c.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<div class="btn">3D</div>
```

css：
```
body{
  background:#229FFD;
}
.btn{
  font-weight:bold;
  font-size:25px;
  background:#fff;
  display:inline-block;
  width:100px;
  height:100px;
  text-align:center;
  line-height:100px;
  border-radius:100%;
  margin:50px;
  box-shadow:
    0 10px 0 #e0e0e0,
    0 15px 2px rgba(0,0,0,0.2);
  cursor:pointer;
  transition:all 0.2s;
}
.btn:active{
  transform:translateY(8px);
  box-shadow:
    0 2px 0 #e0e0e0,
    0 4px 2px rgba(0,0,0,0.3);
}
```
