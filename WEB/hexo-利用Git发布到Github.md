1. 在hexo根目录下执行命令，安装hexo-deployer-git（一般默认都有，可以打开根目录下的package.json查看）：
```
npm install hexo-deployer-git --save
```

2. 找到github项目对应的git地址：

![](http://upload-images.jianshu.io/upload_images/2381669-7f34c9ac7070bce5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 在根目录下的_config.yml文件末尾添加配置：
```
deploy:
  type: git
  repository: https://github.com/garuhester/garuhester.github.io.git
  branch: master
```

4. 在hexo根目录依次执行命令：
```
$ hexo clean //清除缓存
$ hexo g //生成静态网页文件
$ hexo d //发布到github
```

---

>为了方便使用，可以做成bat文件：
开启服务：```hexo clean & hexo g & hexo s```
Git上传：```hexo clean & hexo g & hexo d```

