搬瓦工VPS自带Snapshots快照备份，每个VPS可以备份2次且有效期是30天
***
#如何创建Snapshots快照
- 进入搬瓦工VPS管理界面(**KiwiVM Extras — Snapshots**)
从图中可以看到，我们可以创建快照也可以导入快照
![KiwiVM Extras — Snapshots](http://upload-images.jianshu.io/upload_images/2381669-344138cb64d43dcc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - 点击`Create new snapshot`创建快照，设置一个名称，开始备份
备份过程中服务器会暂停，备份完成后服务器会重启
  - 点击`Import a snapshot`导入快照，这里需要输入`VEID:`和`TOKEN:`
参数在后面会说到
***
#Snapshots快照管理
- 快照创建成功后，会有以下界面
![管理界面](http://upload-images.jianshu.io/upload_images/2381669-b5c703d1d7fab9b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  - **download:**  将快照下载到本地
  - **restore:**  恢复到此快照，并且会重写当前服务器的所有数据（如果当前服务器出现问题可以点此进行恢复）
![恢复](http://upload-images.jianshu.io/upload_images/2381669-204f1c6b28fb3e8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - **delete:**  删除快照
  - **set sticky:**  设置永久保存（最多允许**2个快照**设置为永久保存）
![永久保存](http://upload-images.jianshu.io/upload_images/2381669-05a8c096ba0d51ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - **export:**  导出参数，参数为`VEID:`和`TOKEN:`，可用于`Import a snapshot`导入快照
![VEID和TOKEN](http://upload-images.jianshu.io/upload_images/2381669-58102dacc4ae2e80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
***
**就先到这里啦，喜欢折腾的孩子还是建个快照吧（笑），不然到时候哭都哭不出来，哈哈哈**
