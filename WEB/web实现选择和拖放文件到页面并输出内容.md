## 效果：
### 1.选择文件
![](https://upload-images.jianshu.io/upload_images/2381669-e6b58787eb4c36a9.gif?imageMogr2/auto-orient/strip)

### 2.拖放文件
![](https://upload-images.jianshu.io/upload_images/2381669-5826da1184439219.gif?imageMogr2/auto-orient/strip)

---

## 代码：
html ：
```
<div id="box">
	<span id="span">选择或拖放文件</span>
	<input type="file" id="browse">
</div>
```
css：
```
#box {
	position: relative;
    border: 3px dashed #ddd;
    width: 200px;
	height: 70px;
    text-align: center;
    line-height: 70px;
    cursor: pointer;
}
#box input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
#box.hover {
	border: 3px dashed #999;
}
```
javascript：
```
var box = document.getElementById('box');
var input = document.getElementById('browse');
var span = document.getElementById('span');

//box事件
box.ondragover = function() {
	this.className = "box hover";
}
box.ondragleave = function() {
	this.className = "box";
}

//input事件
input.ondragover = function(e) {
    e.preventDefault();
}
input.ondrop = function(e) {
	e.preventDefault();
	box.className = "box";
	var file = e.dataTransfer.files[0];
	show(file);
}
input.onchange = function() {
	var file = this.files[0];
	show(file);
}

function show(file) {
	span.innerHTML = file.name;
	var fr = new FileReader();
	fr.onload = function() {
		var result = this.result;
		console.log(result);
	}
	fr.readAsText(file);
}
```

---
## 具体功能部分：

1. 拖动文件到页面，样式发生变化代码部分：
```
box.ondragover = function() {
    this.className = "box hover";
}
box.ondragleave = function() {
    this.className = "box";
}
```

2. 选择文件代码部分：
```
input.onchange = function() {
    var file = this.files[0];
    show(file);
}
```

3. 拖放文件代码部分：
```
input.ondragover = function(e) {
    e.preventDefault();
}
input.ondrop = function(e) {
    e.preventDefault();
    box.className = "box";
    var file = e.dataTransfer.files[0];
    show(file);
}
```
