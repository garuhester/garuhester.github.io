在根目录下的/theme/next/_config.yml文件中搜索`motion`

## 设置动画
在`motion`下的`transition`参数下设置页面动画（注释中有参考的动画名称）

![](http://upload-images.jianshu.io/upload_images/2381669-d614b0cb175ed2ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
transition:
    post_block: fadeIn
    post_header: slideDownIn
    post_body: slideDownIn
    coll_header: slideLeftIn
    sidebar: slideUpIn
```

## 取消动画
将`motion`下的`enable`参数设置为`false`即可关闭页面动画
```
motion:
  enable: false
```
