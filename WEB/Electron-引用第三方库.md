html：
```
<!DOCTYPE html>
<head>
	<title>Electron</title>
	<script src="jquery.min.js"></script>
</head>
<body>
	<button id="btn">open</button>
	<script>
		$('#btn').click(function(){
			console.log("hello world");
		});
	</script>
</body>
</html>
```
可以看到html文件引用了jquery.min.js
如果直接执行命令npm start运行electron程序后，点击按钮会出现错误，原因是jquery没有被成功的引用

![](http://upload-images.jianshu.io/upload_images/2381669-a0c2c04600552e00.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

## 解决方法：
将
```
<script src="jquery.min.js"></script>
```
改为
```
<script>window.$ = window.JQuery = require('./jquery.min.js');</script>
```



