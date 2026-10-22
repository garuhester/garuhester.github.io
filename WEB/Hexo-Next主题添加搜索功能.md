1. 在hexo的根目录下执行命令：
```
npm install hexo-generator-searchdb --save
```

2. 在根目录下的/theme/next/_config.yml文件中添加配置：
```
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

3. 在根目录下的/theme/next/_config.yml文件中搜索`local_search`，将`enable`改为`true`：
```
local_search:
  enable: true
```

运行效果：
![](http://upload-images.jianshu.io/upload_images/2381669-1266010024fc13b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-8814b3bd571b6302.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

