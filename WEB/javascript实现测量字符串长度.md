## 代码：
```
var getStrSize = function(str) {
	var d = document.createElement("div");
	d.style.position = "fixed";
	d.id = "getsize";
	d.innerHTML = str;
	document.body.appendChild(d);
	var result = document.getElementById('getsize');
	var size = result.clientWidth;
	document.body.removeChild(d);
	return size;
}
```
