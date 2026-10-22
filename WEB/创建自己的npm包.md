1. 新建一个文件夹（这里名为：npmmodule）

![](http://upload-images.jianshu.io/upload_images/2381669-069ae582918079b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 进入文件夹后，命令输入```npm init```，生成```package.json```文件
3. 创建文件```index.js```，则当前文件结构为：

![](http://upload-images.jianshu.io/upload_images/2381669-556d09708654c40b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 输入简单的测试内容

- index.js

![](http://upload-images.jianshu.io/upload_images/2381669-352372616748f6b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- package.json
  - name为要创建的npm包名，要先确认名字是否存在
  - version为npm包的版本

![](http://upload-images.jianshu.io/upload_images/2381669-0b1baa4c213512ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5. 命令输入```npm login```，填写登录信息（提前在npm官网进行注册：https://www.npmjs.com/）

![](http://upload-images.jianshu.io/upload_images/2381669-18e8af9421fa3352.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

6. 命令输入```npm publish```，即可完成npm包的创建，现在就可以用```npm install name```（name为之前创建的npm包名）进行模块安装了



