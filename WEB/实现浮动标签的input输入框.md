## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-ee440e41080ee947.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<div id="main">
  <input id="input" type="text"/>
  <label>User Name</label>
</div>
```

css：
```
#main{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
#main label{
  position:absolute;
  top:50%;
  left:22px;
  transform:translate(0,-50%);
  transition:all 0.3s;
  color:#ddd;
  z-index:-1;
}
#main input{
  height:10px;
  border:2px solid #ddd;
  outline:none;
  font-size:20px;
  padding:20px;
  transition:all 0.3s;
  background:none;
  z-index:5;
}
#main input:focus{
  border:2px solid #00a2f9;
  transition:all 0.3s;
}
#main.focus label{
  top:-25px;
  left:-5px;
  color:#262626;
  transform:scale(0.9);
}
```

javascript：
```
var inp = document.getElementById("input");
var main = document.getElementById("main");
inp.onfocus = function(){
  if(inp.value == ""){
      main.className += "focus";
  }
}
inp.onblur = function(){
  if(inp.value == ""){
      main.className = "";
  }
}
```
