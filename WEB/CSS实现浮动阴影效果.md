效果：
![](https://upload-images.jianshu.io/upload_images/2381669-3e94c3f04b1f180c.gif?imageMogr2/auto-orient/strip)

实现：
HTML：
```
<div class="box"></div>
```

CSS：
```
.box {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:200px;
  height:50px;
  background: skyblue;
  box-shadow:-5px 5px 0px rgba(0,0,0,0.2);
  cursor:pointer;
  transition: all 0.5s;
}
.box:hover {
  transform:translate(calc(-50% + 3px), calc(-50% - 3px));
  box-shadow:-10px 10px 0px rgba(0,0,0,0.2);
}
```
