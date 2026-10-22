## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-d7109b3fbf66f7cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-adfb3f1613158e2e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-1edd181d8bf018da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
```
xAxis: {
    data: ["a", "b", "c", "d", "e", "f"],
    axisLabel: {
        show: true,
        formatter: function(value) {
            return '{' + value + '| }';
        },
        rich: {
            value: {
                lineHeight: 30,
                align: 'center'
            },
            "a": {
                width: 90,
                height: 55,
                align: 'center',
                backgroundColor: {
                    image: './img/dianli.png'
                }
            },
            "b": {
                width: 90,
                height: 55,
                align: 'center',
                backgroundColor: {
                    image: './img/yiliao.png'
                }
            },
            "c": {
                width: 100,
                height: 50,
                align: 'center',
                backgroundColor: {
                    image: './img/hulianwang.png'
                }
            },
            "d": {
                width: 90,
                height: 55,
                align: 'center',
                backgroundColor: {
                    image: './img/jiaotong.png'
                }
            },
            "e": {
                width: 100,
                height: 50,
                align: 'center',
                backgroundColor: {
                    image: './img/yunying.png'
                }
            },
            "f": {
                width: 90,
                height: 55,
                align: 'center',
                backgroundColor: {
                    image: './img/jinrong.png'
                }
            }
        }
    }
}
```

