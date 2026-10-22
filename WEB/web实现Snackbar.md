## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-9834e0354617b5a7.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<button id="btn">打开</button>
<div class="msg">
  hello world!!!
</div>
```

css：
```
.msg{
  position:fixed;
  min-width:200px;
  padding:15px;
  background:#ee6cad;
  color:#fff;
  box-shadow:0px 0px 7px #ee6cad;
  top:-70px;
  left:50%;
  transform:translate(-50%,0);
  transition:all 0.2s;
}
.msg.open{
  top:0;
  transition:all 0.2s;
}
```

javascript：
```
document.getElementById("btn").onclick = function(){
  document.querySelector('.msg').className += " open";
  setTimeout(function(){
    document.querySelector('.msg').className = "msg";
  },2000);
}
```
