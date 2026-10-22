html:
```
<div class="box"></div>
```

css:
```
.box{
  width:150px;
  height:150px;
  background-image: linear-gradient(
    135deg,
    #e3931a 25%,
    #edb02f 0%,
    #edb02f 50%,
    #e3931a 0,
    #e3931a 75%,
    #edb02f 0%
  );
  background-size: 25px 25px;

  animation: progressMove 4s linear infinite;
}

@keyframes progressMove {
	0% {
		background-position: 0px;
	}
	100% {
		background-position: 100px;
	}
}
```

效果:
![](https://upload-images.jianshu.io/upload_images/2381669-d071d7c481daff4a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/2381669-c7664bc8eb05a4d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/2381669-9f095a8aae110442.gif?imageMogr2/auto-orient/strip)
![](https://upload-images.jianshu.io/upload_images/2381669-e790b88c84e2c16f.gif?imageMogr2/auto-orient/strip)

