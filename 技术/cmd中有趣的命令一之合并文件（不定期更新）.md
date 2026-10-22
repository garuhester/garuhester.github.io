今天给大家介绍的是命令一之**合并文件**(ฅ>ω<*ฅ)，后面我会不定期的进行更新
#合并文件（老司机必备）
**图片下的秘密**
如果你想要把一个文件藏在一张图片里改怎么做呢（手动滑稽）
首先这里有两张图片（1.jpg和2.jpg）：
![两张图片](http://upload-images.jianshu.io/upload_images/2381669-56773029fa7468cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
那么现在我们要把`2.jpg`藏在`1.jpg`里，步骤如下：
1. 将`2.jpg`添加到压缩文件（这里以rar格式为例）
![2.rar](http://upload-images.jianshu.io/upload_images/2381669-92beaa051d74a93d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 在当前目录下新建一个**文本文件**，命名为"合并"（名字可以随意），并将后缀名改为`.bat`，如图：
![合并.bat](http://upload-images.jianshu.io/upload_images/2381669-0cd18cef6bd6673d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 然后右键`合并.bat`，点击编辑，在文本中输入`copy /b 1.jpg+2.rar 3.jpg`
意思是将`1.jpg`与`2.rar`合并成`3.jpg`
![编辑](http://upload-images.jianshu.io/upload_images/2381669-c1252bb729009386.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 然后保存退出，再双击`合并.bat`文件即可生成`3.jpg`
![3.jpg](http://upload-images.jianshu.io/upload_images/2381669-ef275470f720ada4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这个时候打开`3.jpg`会发现只是一张普通的图片
5. 但是！！！！！！！！！
如果你把`3.jpg`的后缀名改成`.rar`后
![3.rar](http://upload-images.jianshu.io/upload_images/2381669-376291489045768e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
再双击它，你会发现打开的是一个压缩文件，而且文件里面有一张叫2.jpg的图片，嘿嘿嘿~~~~

>原理：
是把两个的文件的二进制代码进行合并，并且你会发现，合并过后图片的大小刚好的两个文件的大小总和

当然你也可以尝试各种文件格式的组合，比如把图片放进一首歌里，或者是两个文本的组合等等，反正你能想到好玩的都可以自己试一试，方法就是
`copy /b 文件1+文件2 文件3`
记得（/b和文件1）（文件2和文件3）之间都有空格

**好啦今天的教程就到这里，自己试试吧（￣︶￣）**
