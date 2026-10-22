## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-1e16e6614fa24e16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 代码：
```
series: [{
	itemStyle: {
	    normal: {
	        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
	            offset: 0,
	            color: "red" // 0% 处的颜色
	        }, {
	            offset: 0.6,
	            color: "blue" // 60% 处的颜色
	        }, {
	            offset: 1,
	            color: "yellow" // 100% 处的颜色
	        }], false)
	    }
	}
}]
```
