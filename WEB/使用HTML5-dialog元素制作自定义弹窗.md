## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-75a08ecd11b70a86.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<button id="btn">打开窗口</button>
<dialog id="dia">
  <div class="header">
    消息提示框
  </div>
  <div class="content">
    你确定要退出？
  </div>
  <div class="footer">
    <div class="ok">
      确定
    </div>
    <div class="cancel">
      取消
    </div>
  </div>
</dialog>
```

css：
```
dialog{
  padding:0;
  border:none;
  box-shadow:0px 1px 3px rgba(0,0,0,0.2);
  width:50%;
  border-radius:10px;
}
.header{
  padding:10px;
  color:#fff;
  border-radius:10px 10px 0 0;
  background:#50a8fa;
}
.content{
  padding:30px 12px 30px 12px;
}
.footer{
  background:#f9f9f9;
  overflow:hidden;
  border-radius:0 0 10px 10px;
  padding-right:20px;
}
.footer .ok,.footer .cancel{
  padding:10px;
  float:right;
  cursor:pointer;
}
.footer .ok:hover,.footer .cancel:hover{
  background:#ededed;
}
```

javascript：
```
var dialog = document.getElementById("dia");
document.getElementById("btn").addEventListener("click",function(){
  dialog.showModal();
});
document.querySelector(".cancel").addEventListener("click",function(){
  dialog.close();
});
```
>javascript控制dialog的打开和关闭：
打开：`dialog.showModal();`
关闭：`dialog.close();`


