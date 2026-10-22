## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-00366893003ede9f.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<div id="box">
  <div id="left"></div>
  <div id="resize"></div>
  <div id="right"></div>
</div>
```

css：
```
body,html{
  margin:0;
  padding:0;
  height:100%;
}
#box{
  width:600px;
  height:500px;
  overflow:hidden;
}
#left{
  width:calc(30% - 5px);
  height:100%;  
  background:skyblue;
  float:left;
}

#resize{
  width:5px;
  height:100%;
  cursor: w-resize;
  float:left;
}

#right{
  float:right;
  width:70%;
  height:100%;  
  background:tomato;
}
```

javascript：
```
window.onload = function(){
  var resize = document.getElementById("resize");
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var box = document.getElementById("box");
  resize.onmousedown = function(e){
    var startX = e.clientX;
    resize.left = resize.offsetLeft;
    document.onmousemove = function(e){
      var endX = e.clientX;

      var moveLen = resize.left + (endX - startX);
      var maxT = box.clientWidth - resize.offsetWidth;
      if(moveLen<150) moveLen = 150; 
      if(moveLen>maxT-150) moveLen = maxT-150;

      resize.style.left = moveLen;
      left.style.width = moveLen + "px";
      right.style.width = (box.clientWidth - moveLen - 5) + "px";
    }
    document.onmouseup = function(evt){
      document.onmousemove = null;
      document.onmouseup = null; 
      resize.releaseCapture && resize.releaseCapture();
    }
    resize.setCapture && resize.setCapture();
    return false;
  }
}
```
