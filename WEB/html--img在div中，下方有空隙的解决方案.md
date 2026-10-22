如果img在div中，会发现图片并没有完全填充div，而是在下方出现了一点空隙
```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .wrap{
            background:lightblue;
        }
        .img{
            height: 400px;
        }
    </style>
</head>
<body>
<div class="wrap">
    <img class="img" src="1.jpg">
</div>
</body>
</html>
```
![](http://upload-images.jianshu.io/upload_images/2381669-231bcba447ba0d75.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 解决方案
1. img设置display:block;
```
.img{
    height: 400px;
    display: block;
}
```
2. div设置font-size:0;
```
.wrap{
    background:lightblue;
    font-size: 0;
}
```

## 效果
![](http://upload-images.jianshu.io/upload_images/2381669-85c6358b2b7d6ee2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




