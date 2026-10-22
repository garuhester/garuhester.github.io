## 1. 新建一个repositories

## 2. 进入repositories下的wiki选项中
![](http://upload-images.jianshu.io/upload_images/2381669-a6259648c925be5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 3. 复制wiki对应的克隆地址
![](http://upload-images.jianshu.io/upload_images/2381669-b3c7db366410a379.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4. 在本地克隆项目
```
$ git clone https://github.com/garuhester/ImageBed.wiki.git
```
![](http://upload-images.jianshu.io/upload_images/2381669-75763b3265c289b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 5. 进入文件夹，将要上传的图片放在文件夹中
![](http://upload-images.jianshu.io/upload_images/2381669-5bbf0e197bf9914a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 6. 打开命令行，依次输入命令：
```
$ git add photo.png

$ git commit -a -m "update"

$ git push 
```

## 7. 现在已经将图片放置Github图床，图片的地址为：
```
https://raw.githubusercontent.com/wiki/garuhester/ImageBed/photo.png
```
>`garuhester`为你的Github用户名（username）
`ImageBed`为你创建的repository的名称（repository）
`photo.png`为图片的名称


