1. 在hexo的根目录下执行命令：
```
npm install hexo-generator-feed --save
```

2. 在根目录下的/theme/next/_config.yml文件中添加配置：
```
feed:
    type: rss2
    path: rss2.xml
    limit: 5
    hub:
    content: 'true'
```

3. 运行效果：
![](http://upload-images.jianshu.io/upload_images/2381669-73f2eac661c6ecf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-a410b6c2ee03c06a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



