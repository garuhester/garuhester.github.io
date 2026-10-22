Android APP如果要实现语言（中英文为例）的切换该怎么做呢？

#1. 在res文件下建立文件夹values-en，并且新建strings.xml文件
![strings.xml](http://upload-images.jianshu.io/upload_images/2381669-cb6c9699d500ed64.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###文件内容对应如下：
  - values/strings.xml：
![values/strings.xml](http://upload-images.jianshu.io/upload_images/2381669-e510ff30bbad0cd2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - values-en/strings.xml：
![values-en/strings.xml](http://upload-images.jianshu.io/upload_images/2381669-54fa935c8c4c6845.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#2. 实现语言切换的方法：
`
Configuration config = getResources().getConfiguration();
Resources resources = getResources();
if (config.locale.equals(Locale.ENGLISH)){//如果已经为英文
      config.locale = Locale.CHINESE;//切换中文
}else if (config.locale.equals(Locale.CHINESE)){//如果已经为中文
      config.locale = Locale.ENGLISH;//切换英文
}                    
DisplayMetrics dm = resources.getDisplayMetrics();
resources.updateConfiguration(config, dm);
`

#3. 在AndroidManifest.xml文件中对需要改变语言的Activity添加属性`android:configChanges="locale"`
![AndroidManifest.xml](http://upload-images.jianshu.io/upload_images/2381669-332362bb4b5de95a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>小提示：如果需要保存用户修改的语言以便下一次打开APP时改变语言，可以将用户选择的信息保存至SharedPreferences储存类或者数据库中，在打开时读取判断即可，这里不详细叙述




