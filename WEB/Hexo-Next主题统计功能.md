1. 在hexo的根目录下执行命令：
```
npm install hexo-wordcount --save
```

2. 在根目录下的/theme/next/_config.yml文件中搜索`Post wordcount`，并配置以下参数：
`wordcount`：字数统计
`min2read`：阅读时长预计
 `totalcount`：总字数统计
```
post_wordcount:
    item_text: true
    wordcount: true
    min2read: false
    totalcount: false
    separated_meta: true
```

3. 运行效果：

![](http://upload-images.jianshu.io/upload_images/2381669-894f711aebad1122.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




