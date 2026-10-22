今天给大家介绍的是命令二之**隐藏文件** (￣y▽￣)~*捂嘴偷笑
#隐藏文件
说到隐藏文件，你可能会说“可以把文件的属性改成隐藏”，像这样：
![隐藏属性](http://upload-images.jianshu.io/upload_images/2381669-976a6aacb7a9505e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这样当然可以达到文件隐藏的目的，如果想要查看的话，只需要把文件管理器里面的显示隐藏的文件和文件夹选项勾上就可以看到了，并且隐藏后图片变成了半透明的状态
![显示隐藏](http://upload-images.jianshu.io/upload_images/2381669-c8dc263ce02db2b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
***
#但是，咱们今天要说的当然不是这种隐藏方式
我们可以用一条cmd命令来达到隐藏文件的目的，想要查看这种方式隐藏的文件的话我们也要用命令才能显示

1. 首先准备一张图片
![a.png](http://upload-images.jianshu.io/upload_images/2381669-438d822c27bd4762.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 然后在当前目录下建立一个文本文件，将后缀名改成`.bat`
3. 然后右键编辑输入 `Attrib +h +s +r a.png`，保存退出（a.png是你文件的名称，要加上后缀名）
4. 双击bat文件即可将图片隐藏，并且你打开显示隐藏文件的选项也不会看到
5. 想要重新显示图片的话，将bat文件的命令改为 `Attrib -h -s -r a.png` ，再次执行即可显示图片
>当然也可以直接在该文件目录下打开cmd，直接执行上面两条命令也是可以的，也可以建立两个bat文件，像这样，里面分别写入显示和隐藏命令即可
![显示/隐藏](http://upload-images.jianshu.io/upload_images/2381669-15a1f6921345ca1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**赶紧自己试试吧(￣y▽￣)~***
