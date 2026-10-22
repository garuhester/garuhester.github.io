## 代码
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		div{
			height: 30px;
		}
		#d1{
			background: blue;
		}
		#d2{
			background: red;
		}
	</style>
</head>
<body>
	<div id="d1">1</div>
	<div id="d2">2</div>
	<script>
		var d1 = document.getElementById('d1');
		var d2 = document.getElementById('d2');

		//移动d1到d2后面
		function move_d1_to_d2_after(){
			d1.parentNode.insertBefore(d1,d2.nextSibling);
		}
		//移动d1到d2里面
		function move_d1_into_d2(){
			d2.appendChild(d1);
		}
		//移动d2到d1前面
		function move_d2_to_d1_before(){
			d2.parentNode.insertBefore(d2,d1);
		}
	</script>
</body>
</html>
```

- 初始

![](http://upload-images.jianshu.io/upload_images/2381669-0f5191a6e6a4b170.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-24a076f3c7e1fb84.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 执行```move_d1_to_d2_after```，即移动d1到d2后面

![](http://upload-images.jianshu.io/upload_images/2381669-0cc1f9726367b86c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-e019ad318e880294.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 执行```move_d1_into_d2```，移动d1到d2里面

![](http://upload-images.jianshu.io/upload_images/2381669-0b10e5a91c7879e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-092af5fa475b22fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 执行```move_d2_to_d1_before```，即移动d2到d1前面

![](http://upload-images.jianshu.io/upload_images/2381669-0cc1f9726367b86c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-e019ad318e880294.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)






