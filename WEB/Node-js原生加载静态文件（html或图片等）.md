## 代码：
html：
```
<img src="./public/a.jpg">
```
Nodejs：
```
var http = require('http');

http.createServer(function (req, res) {

	//获取文件类型
	var type = req.url.substr(req.url.length - 4, req.url.length);

    //获取资源路径
	var realpath = __dirname + '/public/';

    //加载需要显示的图片资源
	if (type == '.jpg') {
		res.writeHead(200, { 'Content-Type': 'text/'+type });
		res.end(fs.readFileSync(realpath + 'a.jpg'));
	}

    //加载静态html文件
	if (req.url == "/") {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(fs.readFileSync(__dirname + '/index.html'));
	}
}).listen(8080, function () {
	console.log("http://localhost:8080");
});
```

这样加载的html文件中的图片就能够显示了
