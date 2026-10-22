## 代码：
html：
```
<button onclick="post()">Detect</button>
```

javascript：
```
//原生请求：
var obj = new XMLHttpRequest();
obj.open("POST", "/postdata", true);
obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
obj.onreadystatechange = function () {
    if (obj.readyState == 4 && (obj.status == 200)) {
        console.log(obj.responseText);
    }
}
obj.send();

//jquery
$.ajax({
    type:"post",
    url:"/detect",
    data:{},
    success(data){
        console.log(data);
    }
});
```
注意：
1.请求地址为`/postdata`  
2.为了演示，post请求没有传递参数

---

Nodejs：
```
var http = require('http');

http.createServer(function (req, res) {
    if (req.url == "/postdata") {
        res.end("hello world");
    }
}).listen(8080, function () {
	console.log("http://localhost:8080");
});
```
直接用`res.end()`向前台返回数据即可
