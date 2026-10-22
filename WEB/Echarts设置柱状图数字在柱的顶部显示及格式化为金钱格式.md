## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-e744f2acf7f0632f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
```
series: [{
	data: [100,200,30000,400,500,200],
	label: {
	    normal: {
	        show: true,
	        position: 'top',
	        formatter: function(a) {
	            var result = [],
	                counter = 0,
	                num = a.data;
	            num = (num || 0).toString().split('');
	            for (var i = num.length - 1; i >= 0; i--) {
	                counter++;
	                result.unshift(num[i]);
	                if (!(counter % 3) && i != 0) {
	                    result.unshift(',');
	                }
	            }
	            result.unshift("¥");
	            result = result.join('');
	            return result;
	        }
	    }
	}
}]
```
