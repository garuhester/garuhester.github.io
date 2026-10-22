如果x轴数据过多，那么图标下方将显示不全，像这样：
![](https://upload-images.jianshu.io/upload_images/2381669-a772841792030419.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Echarts实现内部横向滚动条，在配置项里加上：
```
dataZoom: [
    {
        show: true,
        realtime: true,
        start: 0,
        end: 50
    },
    {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 50
    }
]
```

效果：
![](https://upload-images.jianshu.io/upload_images/2381669-68f085e735df4387.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/2381669-8f1f7b88721cadb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

