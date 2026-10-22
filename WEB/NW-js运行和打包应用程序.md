这里介绍如何利用NW.js运行和打包应用程序（windows平台）

>开始前的准备：
1.下载nw.js（地址：https://cdn.npm.taobao.org/dist/nwjs/v0.54.0/nwjs-v0.54.0-win-x64.zip)，下载后解压即可。
可选：下载Enigma Virtual Box（地址：http://enigmaprotector.com/assets/files/enigmavb.exe）


##运行
1. nw.js包解压后的文件结构：

![](http://upload-images.jianshu.io/upload_images/2381669-3d447dbcb57e08fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 在解压的nw.js中创建一个文件夹，这里命名为myapp

![](http://upload-images.jianshu.io/upload_images/2381669-3cc7f57dc7994083.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 在myapp文件夹中创建文件index.html，并写入一个简单的web页面代码

![](http://upload-images.jianshu.io/upload_images/2381669-1041fb952ecc4aea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-765f59cd1697905b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. 在myapp文件夹中创建文件package.json，并写入配置

![](http://upload-images.jianshu.io/upload_images/2381669-6fcc8ac1e18e2ca1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/2381669-1ae4492714ab00d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5. 在nw解压根目录下运行cmd命令


```
nw.exe ./myapp
```
效果：
![](https://upload-images.jianshu.io/upload_images/2381669-1795adc87e548012.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##打包
1. 在nw解压根目录下将myapp压缩为myapp.zip

![](https://upload-images.jianshu.io/upload_images/2381669-2cb5ac92e8bf9b24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 将myapp.zip后缀改为.nw

![](https://upload-images.jianshu.io/upload_images/2381669-5077149440fa69a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 在nw解压根目录下运行cmd命令
```
copy /b nw.exe+myapp.nw app.exe
```

4. 运行app.exe即可打开应用程序

![](https://upload-images.jianshu.io/upload_images/2381669-de58d986796e58af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

